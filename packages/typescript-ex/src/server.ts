import express from 'express';
import http from 'http';

const router = express;

http.createServer(router).listen(8080,()=>{
    console.log("server started on port 8080.")
});