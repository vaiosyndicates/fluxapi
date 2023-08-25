/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification managing API
 * /auth:
 *   get:
 *     summary: Retrieve a list of users.
 *     tags: [Auth]
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
 * /auth/register:
 *   post:
 *     summary:   Register user.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: sesilia
 *               role:
 *                 type: integer
 *                 description: The user's role. User role value will be represent using integer number. 0 for users, 1 for approver, 2 for admin
 *                 example: 1
 *               password:
 *                 type: string
 *                 description: The user's password. The valid value is raw / plain text. And will be hashed later
 *                 example: lalala
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
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: sesilia
 *                       role:
 *                         type: string
 *                         description: The user's role.
 *                         example: approver
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z 
 * /auth/login:
 *   post:
 *     summary: Login user.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: sesilia
 *               password:
 *                 type: string
 *                 description: The user's password. The valid value is raw / plain text. And will be hashed later
 *                 example: lalala
 *     responses:
 *       200:
 *         description: Success login will return token jwt.
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
 *                   type: object
 *                   properties:
 *                    token:
 *                     type: string
 *                     description: The user ID.
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 * 
 */