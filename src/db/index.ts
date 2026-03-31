/*
 * @Author: CL
 * @Date: 2026-03-30 18:45:00
 * @LastEditTime: 2026-03-30 23:44:30
 * @Description: 创建数据库
 */

import { connect } from 'mongoose'
import MovieModel from './movieModel';

connect('mongodb://localhost:27017/moviedb').then(() => {
  console.log('连接成功');
}).catch(err => {
  console.log('连接失败', err);
})

export { MovieModel }