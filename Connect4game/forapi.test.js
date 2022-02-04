//const server = require('forapi')
const supertest = require('supertest')
const should = require('should')
const req = require('express/lib/request')
const { json } = require('express/lib/response')

const server = supertest.agent("http://localhost:3000")

describe('sample', function(){
    it("should return home page", function(done){
        server
        .get("/winner_get_data")
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200)
            done()
        })
    })

    it("should return ok if req is json", function(done){
        server
        .post("/winner_data")
        .send({name1:"Anna", name2: "Mundy", winner: "red", score: 34})
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            expect(res.text).toEqual('ok') 
            done()
        })
    })

    it("should return error if req is not json", function(done){
        server
        .post("/winner_data")
        .send("Not valid input")
        .expect("Content-type",'json')
        .expect(400)
        .end(function(err,res){
            expect(res.text).toEqual('Error') 
            done()
        })
    })
})