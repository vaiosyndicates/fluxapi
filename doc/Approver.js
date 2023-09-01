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
 *   name: Approver
 *   description: Article managing API ( Approver )
 * /approver/users:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all user with role maker.
 *     tags: [Approver]
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
 * /approver/users/{iduser}/articles:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all article by specific user.
 *     tags: [Approver]
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success get article.
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
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       idUser:
 *                         type: string
 *                         description: Author ID.
 *                         example: 64edf30020328cd4d456ab58
 *                       title:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: Lorem ipsum dolor sit amet
 *                       body:
 *                         type: string
 *                         description: Article main article.
 *                         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 *                       tag:
 *                         type: array
 *                         example: ["camping", "mountain", "survival"]
 *                       isDelete:
 *                         type: boolean
 *                         description: Post status if is delete or not.
 *                         example: false
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z 
 * /approver/users/{iduser}/articles/tag:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all post by specific tag
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag:
 *                 type: array
 *                 description: Article tag
 *                 example: [mountain, camp]
 *     tags: [Approver]
 *     responses:
 *       200:
 *         description: Success get article.
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
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       idUser:
 *                         type: string
 *                         description: Author ID.
 *                         example: 64edf30020328cd4d456ab58
 *                       title:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: Lorem ipsum dolor sit amet
 *                       body:
 *                         type: string
 *                         description: Article main article.
 *                         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 *                       tag:
 *                         type: array
 *                         example: ["camping", "mountain", "survival"]
 *                       isDelete:
 *                         type: boolean
 *                         description: Post status if is delete or not.
 *                         example: false
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * /approver/users/{iduser}/articles/{idarticle}:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get detail article by user id and article id
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: ID of the article.
 *         schema:
 *           type: string
 *     tags: [Approver]
 *     responses:
 *       200:
 *         description: Success get article.
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
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       idUser:
 *                         type: string
 *                         description: Author ID.
 *                         example: 64edf30020328cd4d456ab58
 *                       title:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: Lorem ipsum dolor sit amet
 *                       body:
 *                         type: string
 *                         description: Article main article.
 *                         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 *                       tag:
 *                         type: array
 *                         example: ["camping", "mountain", "survival"]
 *                       isDelete:
 *                         type: boolean
 *                         description: Post status if is delete or not.
 *                         example: false
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *   put:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Update status article from not approve to approve
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: ID of the article.
 *         schema:
 *           type: string
 *     tags: [Approver]
 *     responses:
 *       200:
 *         description: Success delete article.
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
 */