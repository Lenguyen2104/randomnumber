const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// Tạo mới session và các number
router.post('/sessions', sessionController.createSessionWithNumbers);

// Lấy 5 session gần nhất cùng với các số bên trong
router.get('/admin/sessions/recent', sessionController.getRecentSessions);

// Cập nhật trạng thái session thành COMPLETED
router.put('/sessions/:id/status/completed', sessionController.updateSessionStatusToCompleted);

// Cập nhật trạng thái session thành ONGOING
router.put('/sessions/:id/status/ongoing', sessionController.updateSessionStatusToOngoing);

// Cập nhật một số theo ID
router.put('/numbers/:id', sessionController.updateNumber);

module.exports = router;
