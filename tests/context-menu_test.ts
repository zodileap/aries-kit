import assert from 'node:assert/strict';
import { calculateContextMenuPosition } from '../src/components/context-menu/position';

/**
 * 描述：测试执行器，逐个执行测试用例并输出结果。
 *
 * Params:
 *
 *   - name: 测试名称。
 *   - testFn: 测试函数。
 *
 * Returns:
 *
 *   - void: 无返回值。
 */
const runTest = (name: string, testFn: () => void): void => {
    testFn();
    console.log(`PASS: ${name}`);
};

/**
 * 描述：验证在视口空间充足时，菜单按照点击点和偏移量显示。
 */
runTest('应在空间充足时保持原始定位', () => {
    const result = calculateContextMenuPosition({
        clickX: 100,
        clickY: 120,
        menuWidth: 180,
        menuHeight: 120,
        viewportWidth: 1280,
        viewportHeight: 720,
        safePadding: 12,
        offsetX: 8,
        offsetY: 8,
    });

    assert.equal(result.left, 108);
    assert.equal(result.top, 128);
});

/**
 * 描述：验证在靠近右下角时，菜单会被裁剪回可视区域内。
 */
runTest('应在右下角进行边界裁剪', () => {
    const result = calculateContextMenuPosition({
        clickX: 1260,
        clickY: 700,
        menuWidth: 220,
        menuHeight: 180,
        viewportWidth: 1280,
        viewportHeight: 720,
        safePadding: 12,
        offsetX: 8,
        offsetY: 8,
    });

    assert.equal(result.left, 1048);
    assert.equal(result.top, 528);
});

/**
 * 描述：验证当点击坐标接近左上角且有负偏移时，也会被裁剪到安全边距。
 */
runTest('应在左上角进行边界裁剪', () => {
    const result = calculateContextMenuPosition({
        clickX: 2,
        clickY: 4,
        menuWidth: 160,
        menuHeight: 100,
        viewportWidth: 1280,
        viewportHeight: 720,
        safePadding: 12,
        offsetX: -20,
        offsetY: -20,
    });

    assert.equal(result.left, 12);
    assert.equal(result.top, 12);
});

/**
 * 描述：验证当菜单尺寸大于视口可用空间时，仍然回退到最小安全边距。
 */
runTest('应在菜单超大时回退到安全边距', () => {
    const result = calculateContextMenuPosition({
        clickX: 300,
        clickY: 300,
        menuWidth: 1600,
        menuHeight: 900,
        viewportWidth: 1280,
        viewportHeight: 720,
        safePadding: 12,
        offsetX: 8,
        offsetY: 8,
    });

    assert.equal(result.left, 12);
    assert.equal(result.top, 12);
});

