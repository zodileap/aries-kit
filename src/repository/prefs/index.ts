import { UserPrefs } from './user';

/**
 * 进行持久化的键值对存储的工具类
 * 适合简单的数据，如果是复杂的数据使用其他存储方式
 */
export class Prefs {
  public static readonly user = new UserPrefs();
}
