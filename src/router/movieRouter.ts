/*
 * @Author: CL
 * @Date: 2026-03-31 15:46:07
 * @LastEditTime: 2026-04-01 12:07:40
 * @Description: 电影接口
 */

import Express, { Response, Request } from 'express'
import MovieService from '../service/movieService'
import ResponseResult from './ResponseResult'

const router = Express.Router()

/**
 * 根据id来获取电影数据
 */
router.get('/:id', async (req, res) => {
  try {
    const result = await MovieService.findById(req.params.id)
    ResponseResult.sendData(result, res)
  } catch (err) {
    ResponseResult.sendData(null, res)
  }
})

/**
 * 添加电影
 */
router.post('/', async (req, res) => {
  const result = await MovieService.add(req.body)

  if (Array.isArray(result)) {
    ResponseResult.sendError(result, res)
  } else {
    ResponseResult.sendData(result, res)
  }
})

/**
 * 修改电影
 */
router.put('/', async (req, res) => {
  const id = req.body.id
  if (id) {
    const result = await MovieService.edit(id, req.body)

    Array.isArray(result) ? ResponseResult.sendError(result, res) : ResponseResult.sendData(result, res)
  } else {
    ResponseResult.sendError('请传入电影ID', res)
  }
})

/**
 * 分页查询
 */
router.get('/', async (req, res) => {
  const result = await MovieService.findBySearch(req.query)

  Array.isArray(result) ? ResponseResult.sendError(result, res) : ResponseResult.sendPageData(result.data, result.total, res)
})

/**
 * 删除电影
 */
router.delete('/:id', async (req, res) => {
  try {
    const result = await MovieService.del(req.params.id)
    ResponseResult.sendData(result, res)
  } catch (err) {
    ResponseResult.sendData('该数据不存在', res)
  }
})

export default router