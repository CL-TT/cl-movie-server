/*
 * @Author: CL
 * @Date: 2026-03-28 18:00:54
 * @LastEditTime: 2026-03-31 15:50:13
 * @Description:
 */

import 'reflect-metadata'
import Movie from "./model/Movie";
import './db'
import './router'
import MovieService from './service/movieService';

// const temp = {
//   name: '我是测试电影',
//   type: ['喜剧'],
//   time: 99,
//   isHot: true
// }

// MovieService.add(temp).then(res => {
//   console.log('resadd', res);
// })

// MovieService.edit('69cb4e79553e53c2f2ba18bd', { time: 150 }).then(res => {
//   console.log('resedit', res);
// })

// MovieService.del('69caa775f5e1af342848050d').then(res => {
//   console.log('resdel', res);
// })

// MovieService.findById('69caa888b5f3ab0f3a1acc66').then(res => {
//   console.log('res', res);
// })

// MovieService.findBySearch({ page: 1, size: 10, searchKey: '测试' }).then(res => {
//   console.log('ressearch', res);
// })