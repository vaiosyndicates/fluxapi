/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification managing API
 * 
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
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email.
 *                 example: sesilia@gmail.com
 *               role:
 *                 type: string
 *                 description: The user's role. Accepted role only maker, approver
 *                 example: maker
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
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email.
 *                 example: sesilia@gmail.com
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
  * /auth/reset:
 *   post:
 *     summary: Reset password for all roles.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email.
 *                 example: sesilia@gmail.com
 *               oldPassword:
 *                 type: string
 *                 description: The user's old password. The valid value is raw / plain text. And will be hashed later
 *                 example: lalala
 *               newPassword:
 *                 type: string
 *                 description: The user's new password. The valid value is raw / plain text. And will be hashed later
 *                 example: lalala
 *               confirmationPassword:
 *                 type: string
 *                 description: The user's confitmation password. The valid value is raw / plain text and match with new password.The password will be hashed later
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
 *                  example: success reset password
 */