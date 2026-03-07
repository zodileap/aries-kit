import { _Props } from "../components/base";

/**
 * @param {string} block - 用于 BEM 类名的块名称。
 * @returns {object} 一个包含生成 BEM 类名方法的对象：
 */
export type UseCss = (block: string) => {
    /**
     * 默认命名空间。
     */
    namespace: string;
    /**
     * 生成块或块后缀类名。 
     * @param blockSuffix 
     */
    b(blockSuffix?: string): string;
    /**
     * 生成元素类名。
     * @param element 
     */
    e(element?: string): string;
    /**
     * 生成修饰符类名。 
     * @param modifier 
     */
    m(modifier?: string): string;
    /**
     * 生成块后缀和元素类名。 
     * @param blockSuffix 
     * @param element 
     */
    be(blockSuffix?: string, element?: string): string;
    /**
     * 生成元素和修饰符类名。 
     * @param element 
     * @param modifier 
     */
    em(element?: string, modifier?: string): string;
    /**
     * 生成块后缀和修饰符类名。 
     * @param blockSuffix 
     * @param modifier 
     */
    bm(blockSuffix?: string, modifier?: string): string;
    /**
     * 生成块后缀、元素和修饰符类名。 
     * @param blockSuffix 
     * @param element 
     * @param modifier 
     */
    bem(blockSuffix?: string, element?: string, modifier?: string): string;
    /**
     * 根据提供的状态生成状态类名。 
     * @param name 
     * @param args 
     */
    is(name: string, ...args: (boolean | undefined)[]): string;

    /**
     * 生成元素的 className.
     * 
     * 会对每个参数进行判断，排除 undefined 、空字符串或者不是字符串的参数。
     * @param args - 不定长度的参数,每个参数可以是字符串或字符串数组
     * @returns 合并后的 className 字符串
     */
    gen(...args: Array<_Props['className']>): string;
    /**
     * 获取全局 CSS 变量的值，以var(--varName)的形式返回
     */
    getCssVarName(...args: string[]): string;
    /**
     * 获取全局 CSS 变量的值并转换为数字 
     * @param args 
     */
    getCssVarAsNumber(...args: string[]): number;
}