import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * 添加
   * @param key 
   * @param value 
   */
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取
   * @param key  登录key
   */
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * 删除
   */
  removeItem(key) {
    localStorage.removeItem(localStorage.key(key));
  }

}
