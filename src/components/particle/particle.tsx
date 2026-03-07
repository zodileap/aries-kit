import { useCss } from '@ari/utils';
import { 
  AriParticleProps, 
  ColorfulBokehParticle
} from '@ari/types/components/particle';
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';

/**
 * 五彩斑斓粒子动画组件
 * 实现canvas五彩斑斓的粒子动画特效，具有虚化发光效果
 * 
 * Example:
 * {@link https://aries-react.dev/docs/particle}
 */
export const AriParticle: React.FC<AriParticleProps> = ({
  count = 200,
  sizeRange = [2, 30],
  speedRange = [0.1, 0.5],
  interactive = true,
  interactionRadius = 100,
  glowIntensity = 0.8,
  animationSpeed = 1,
  backgroundColor = '#000000',
  alphaRange = [0.3, 1],
  blurAmount = 15,
  className,
  style,
  children,
  ...props
}) => {
  const cs = useCss('particle');

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ColorfulBokehParticle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mousePositionRef = useRef<{ x: number; y: number } | null>(null);
  const timeRef = useRef(0);

  // State
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 容器样式
  const containerStyles = useMemo(() => ({
    backgroundColor,
    ...style
  }), [backgroundColor, style]);

  // 生成随机颜色
  const getRandomColor = useCallback(() => {
    const hue = Math.random() * 360;
    const saturation = 60 + Math.random() * 40; // 60-100%
    const lightness = 40 + Math.random() * 40; // 40-80%
    return {
      hue,
      saturation,
      lightness,
      color: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    };
  }, []);

  // 生成随机大小
  const getRandomSize = useCallback(() => {
    return Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
  }, [sizeRange]);

  // 生成随机速度
  const getRandomSpeed = useCallback(() => {
    return Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
  }, [speedRange]);

  // 生成随机透明度
  const getRandomAlpha = useCallback(() => {
    return Math.random() * (alphaRange[1] - alphaRange[0]) + alphaRange[0];
  }, [alphaRange]);

  // 创建粒子ID
  const createParticleId = useCallback(() => {
    return Math.random().toString(36).substr(2, 9);
  }, []);

  // 创建五彩斑斓粒子
  const createColorfulBokehParticles = useCallback((): ColorfulBokehParticle[] => {
    const particles: ColorfulBokehParticle[] = [];
    
    for (let i = 0; i < count; i++) {
      const colorInfo = getRandomColor();
      const size = getRandomSize();
      
      particles.push({
        id: createParticleId(),
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size,
        color: colorInfo.color,
        alpha: getRandomAlpha(),
        speedX: (Math.random() - 0.5) * getRandomSpeed(),
        speedY: (Math.random() - 0.5) * getRandomSpeed(),
        hue: colorInfo.hue,
        saturation: colorInfo.saturation,
        lightness: colorInfo.lightness,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
    
    return particles;
  }, [count, dimensions, getRandomSize, getRandomColor, getRandomAlpha, getRandomSpeed, createParticleId]);




  // 初始化粒子
  const initializeParticles = useCallback(() => {
    if (!dimensions.width || !dimensions.height) return;
    particlesRef.current = createColorfulBokehParticles();
  }, [dimensions, createColorfulBokehParticles]);

  // 绘制五彩斑斓粒子
  const drawBokehParticle = useCallback((ctx: CanvasRenderingContext2D, particle: ColorfulBokehParticle) => {
    ctx.save();
    
    // 设置透明度
    ctx.globalAlpha = particle.alpha;
    
    // 绘制发光效果（不使用模糊滤镜，使用多层渐变模拟）
    for (let i = 3; i > 0; i--) {
      const size = particle.size * (1 + i * 0.5);
      const alpha = particle.alpha * (0.1 / i);
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size
      );
      
      gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness + 20}%, ${alpha})`);
      gradient.addColorStop(0.5, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${alpha * 0.5})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 绘制核心粒子
    const coreGradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size
    );
    
    coreGradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${Math.min(100, particle.lightness + 30)}%, 1)`);
    coreGradient.addColorStop(0.7, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0.8)`);
    coreGradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0)`);
    
    ctx.fillStyle = coreGradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }, []);

  // 更新五彩斑斓粒子
  const updateColorfulBokehParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current as ColorfulBokehParticle[];
    
    particles.forEach((particle) => {
      // 更新位置
      particle.x += particle.speedX * animationSpeed;
      particle.y += particle.speedY * animationSpeed;

      // 边界处理（循环出现）
      if (particle.x < -particle.size) particle.x = dimensions.width + particle.size;
      if (particle.x > dimensions.width + particle.size) particle.x = -particle.size;
      if (particle.y < -particle.size) particle.y = dimensions.height + particle.size;
      if (particle.y > dimensions.height + particle.size) particle.y = -particle.size;

      // 脉冲效果
      particle.pulsePhase += particle.pulseSpeed * animationSpeed;
      const pulseFactor = 1 + Math.sin(particle.pulsePhase) * 0.3;
      const currentSize = particle.size * pulseFactor;
      
      // 颜色变化
      particle.hue = (particle.hue + 0.5 * animationSpeed) % 360;
      particle.color = `hsl(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%)`;

      // 鼠标交互（排斥效果）
      if (interactive && mousePositionRef.current) {
        const dx = mousePositionRef.current.x - particle.x;
        const dy = mousePositionRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius * 2;
          particle.x -= dx * force * 0.01;
          particle.y -= dy * force * 0.01;
          
          // 增强发光效果
          particle.alpha = Math.min(1, particle.alpha + 0.02);
        } else {
          // 恢复原始透明度
          particle.alpha = Math.max(getRandomAlpha(), particle.alpha - 0.01);
        }
      }

      // 绘制粒子
      const tempParticle = {
        ...particle,
        size: currentSize
      };
      drawBokehParticle(ctx, tempParticle);
    });
  }, [dimensions, interactive, interactionRadius, animationSpeed, drawBokehParticle, getRandomAlpha]);




  // 主动画循环
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const currentTime = Date.now();
    timeRef.current = currentTime;

    // 清除画布
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // 更新五彩斑斓粒子
    updateColorfulBokehParticles(ctx);

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [dimensions, updateColorfulBokehParticles]);

  // 鼠标事件处理
  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };

    const handleMouseLeave = () => {
      mousePositionRef.current = null;
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive]);

  // 窗口大小变化处理
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 初始化和重新初始化粒子
  useEffect(() => {
    initializeParticles();
  }, [initializeParticles]);

  // 启动动画
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      timeRef.current = Date.now();
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, dimensions]);

  return (
    <div 
      ref={containerRef}
      className={cs.gen(
        cs.b(),
        className
      )}
      style={containerStyles}
      {...props}
    >
      <canvas 
        ref={canvasRef}
        className={cs.e('canvas')}
      />
      {children && (
        <div className={cs.e('content')}>
          {children}
        </div>
      )}
    </div>
  );
};