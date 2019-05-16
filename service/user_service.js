const users = require("../models/Users");
const posts = require("../models/Posts");
const comments = require("../models/Comments");
const express = require("express");
const router = express.Router();
exports.users=async(req, res) => {
    const result= await db.users.findAll({
        include:[
            {
model:db.posts,
include:[
    {
        model: db.comments
    }
]

            }
        ]
    }).then(users=> {
        const resObj = users.map(user => {
            return Object.assign({},
                
                {
                    user_id:user.u_id,
                    username:user.username,
                    role:user.role,
                    posts: user.posts.map(post => {
                        return Object.assign({

                        },
                        {
                            p_id:post.id,
                            u_id:post.u_id,
                            content:post.content,
                            comments: post.comments.map(comment => {
                                return Object.assign({},{

                                    id:comment.id,
                                    post_id: comment.p_id,
                                    content:comment.content,
                                    commenter:comment.commenter_username,
                                    commenter_email: comment.commenter_email
                                })
                            })
                        }
                            )
                    })
                })
        });
        res.json(resObj);
    });
}