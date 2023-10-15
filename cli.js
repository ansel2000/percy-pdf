#!/usr/bin/env node
require('dotenv').config()
const { Command } = require('commander');
const { Build } = require('./app/run');
const program = new Command();

program.name('percy-pdf')
.description('Generate Percy Reports & Download Images Locally')
.argument('<buildId>')
.option('--percy-token <percyToken>',"Percy Token",process.env.PERCY_TOKEN)
.option('--port <port>',"Alternate Port to start percy server. Default: 8000",process.env.PERCY_TOKEN)
.option('--proj-path <projPath>',"Define the path to the project file containing the docs")
.action(async (args,options)=>{
await Build({configPath:args,...options})
})

program.parse()