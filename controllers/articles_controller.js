// @ts-check
const express = require('express');

module.exports = {
    /**
     * Get all articles
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    getAll: function(req, res) {
        res.json({result: "TODO: Get all articles from mongo"});
        
    },
    /**
     * Save an article
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    save: function(req, res) {
        res.json({result: "TODO: Save an article"});
    },
    /**
     * Delete an article
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    delete: function(req, res) {
        res.json({result: "TODO: Delete an article"});
    }
}