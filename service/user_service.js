const users = require("../models/Users");
const posts = require("../models/Posts");
const comments = require("../models/Comments");
const express = require("express");
const router = express.Router();
const db=require('../Util/db');
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
                    u_id:user.u_id,
                    username:user.username,
                    role:user.role,
                    posts: user.posts.map(post => {
                        return Object.assign({

                        },
                        {
                            p_id:post.p_id,
                            UserUId:post.UserUId,
                            content:post.content,
                            comments: post.comments.map(comment => {
                                return Object.assign({},{

                                    id:comment.id,
                                    postPId: comment.postPId,
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