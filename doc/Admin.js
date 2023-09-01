/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer  
 *       bearerFormat: JWT 
 */

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: User managing API
 * /admin/users:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all user.
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: Success get users.
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
 *                       name:
 *                         type: string
 *                         description: The user nameID.
 *                         example: 64edf30020328cd4d456ab58
 *                       role:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * /admin/users/{iduser}:
 *   patch:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Update status user fromnot approve to approve.
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success update users.
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
 *                  example: success update user
 *   delete:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Delete user.
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success update users.
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
 *                  example: success delete user
 */
