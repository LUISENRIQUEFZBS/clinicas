const catchAsync = require(`./catchAsync`);
const pool=require(`./pool`)

exports.getDoctores = catchAsync(async (req, res, next) => {
    const doctores= await pool.query('select * from doctores;')
    console.log('doctores',doctores)
    res.status(200).json( { result: {
        doctores,
      }});
    return next();
});