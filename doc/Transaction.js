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
 *   name: Transfer
 *   description: Transfer managing API
 * /transaction:
 *   get:
 *     summary: Retrieve a list of transaction.
 *     tags: [Transfer]
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
 *     summary: Create transfer transaction.
 *     tags: [Transfer]
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
 * 
 */