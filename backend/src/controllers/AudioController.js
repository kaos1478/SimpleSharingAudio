
const fs = require('fs');
const getStat = require('util').promisify(fs.stat);


module.exports = {
    async show (req, res) {

        const {file} = req.params;

        if (file) {

            const highWaterMark =  2; //64k

            const {file} = req.params;

            const filePath = './src/audios/'+file;
            const stat = await getStat(filePath);

            console.log(stat);
            
            res.writeHead(200, {
                'Content-Type': 'audio/mp3',
                'Content-Length': stat.size
            });

            const stream = fs.createReadStream(filePath, { highWaterMark });

            stream.on('end', () => console.log('acabou'));

            stream.pipe(res);
        }
    },

    async index (req, res) {
        await fs.readdir("./src/audios", (err, paths) => {
            paths.forEach(element => {
                let i = 0;
                element.split(i++);
            });
            return res.json({paths});
        })
    }
}