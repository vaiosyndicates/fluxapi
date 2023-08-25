/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BasicAuth:
 *       type: http
 *       scheme: basic
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 */


/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin managing API
 * 
 * /admin/transaction/status/{status}:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Get list of transactions by status
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         description: Status the transaction to retrieve.
 *         schema:
 *           type: string
 *     tags: [Admin]
 *     responses:
*       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       transactionName:
 *                         type: string
 *                         description: The transaction name.
 *                         example: John doe
 *                       transactionDetail:
 *                         type: string
 *                         description: Detail of transaction.
 *                         example: approver
 *                       sender:
 *                         type: string
 *                         description: ID of sender.
 *                         example: 64e5f7977e55cbbd62b91a43
 *                       recipient:
 *                         type: string
 *                         description: Name of recipient.
 *                         example: Jane doe
 *                       amount:
 *                         type: integer
 *                         description: Transaction amount.
 *                         example: 10000000
 *                       status:
 *                         type: string
 *                         description: The transaction status.
 *                         example: pending
 *                       isDeleted:
 *                         type: boolean
 *                         description: Transaction visibility status.
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * /admin/transaction/startDate/{start}/endDate/{end}:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Get list of transactions by date range and return data which created between {start} and {end} date
 *     parameters:
 *       - in: path
 *         name: start
 *         required: true
 *         description: Start date transaction ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *       - in: path
 *         name: end
 *         required: true
 *         description: End date transaction ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of transactions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       transactionName:
 *                         type: string
 *                         description: The transaction name.
 *                         example: John doe
 *                       transactionDetail:
 *                         type: string
 *                         description: Detail of transaction.
 *                         example: approver
 *                       sender:
 *                         type: string
 *                         description: ID of sender.
 *                         example: 64e5f7977e55cbbd62b91a43
 *                       recipient:
 *                         type: string
 *                         description: Name of recipient.
 *                         example: Jane doe
 *                       amount:
 *                         type: integer
 *                         description: Transaction amount.
 *                         example: 10000000
 *                       status:
 *                         type: string
 *                         description: The transaction status.
 *                         example: pending
 *                       isDeleted:
 *                         type: boolean
 *                         description: Transaction visibility status.
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
/admin/transaction/startDate/{start}/endDate/{end}/status/{status}:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Get list of transactions by date range and status. Will return data which created between {start} and {end} date with specific status
 *     parameters:
 *       - in: path
 *         name: start
 *         required: true
 *         description: Start date transaction ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *       - in: path
 *         name: end
 *         required: true
 *         description: End date transaction ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *       - in: path
 *         name: status
 *         required: true
 *         description: Status transaction
 *         schema:
 *           type: string
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of transactions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       transactionName:
 *                         type: string
 *                         description: The transaction name.
 *                         example: John doe
 *                       transactionDetail:
 *                         type: string
 *                         description: Detail of transaction.
 *                         example: approver
 *                       sender:
 *                         type: string
 *                         description: ID of sender.
 *                         example: 64e5f7977e55cbbd62b91a43
 *                       recipient:
 *                         type: string
 *                         description: Name of recipient.
 *                         example: Jane doe
 *                       amount:
 *                         type: integer
 *                         description: Transaction amount.
 *                         example: 10000000
 *                       status:
 *                         type: string
 *                         description: The transaction status.
 *                         example: pending
 *                       isDeleted:
 *                         type: boolean
 *                         description: Transaction visibility status.
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * 
 * /admin/transaction:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Retrieve a list of transaction for admin role .
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: John doe
 *                       role:
 *                         type: string
 *                         description: The user's role.
 *                         example: approver
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *   post:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Create transfer transaction for role admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trxName:
 *                 type: string
 *                 description: The transaction name
 *                 example: Transfer
 *               trxDetail:
 *                 type: string
 *                 description: The transaction detail
 *                 example: Transfer for user
 *               sender:
 *                 type: string
 *                 description: The sender id
 *                 example: lalala
 *               recipient:
 *                 type: string
 *                 description: The user's name.
 *                 example: sesilia
 *               amount:
 *                 type: integer
 *                 description: The user's role. User role value will be represent using integer number. 0 for users, 1 for approver, 2 for admin
 *                 example: 1

 *     responses:
 *       200:
 *         description: Success register.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 status:
 *                  type: string
 *                  example: success
 * 
 * /admin/transaction/{id}:
 *   put:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Update status transaction by ID transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to retrieve.
 *         schema:
 *           type: string
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Valid status are done, reject and pending
 *                 example: done

 *     responses:
 *       200:
 *         description: Success register.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 status:
 *                  type: string
 *                  example: success
 *   delete:
 *     security:
 *      -  security:
 *          - BearerAuth
 *     summary: Delete transaction by ID transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to delete.
 *         schema:
 *           type: string
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Success register.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 status:
 *                  type: string
 *                  example: success
 * 
 * 
 */