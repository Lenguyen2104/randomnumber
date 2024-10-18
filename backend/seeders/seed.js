const sequelize = require('../config/database');
const Session = require('../models/Session');
const Number = require('../models/Number');
const { logError, logInfo } = require('../utils/logger');

const seedData = async () => {
  try {
    await sequelize.sync();

    const existingSessions = await Session.findAll();
    
    if (existingSessions.length === 0) {
      const sessions = await Session.bulkCreate([
        { status: 3 }, // COMPLETED
        { status: 3 }, // COMPLETED
        { status: 3 }, // COMPLETED
        { status: 3 }, // COMPLETED
        { status: 1 }, // SCHEDULED
      ]);
      logInfo('Sessions seeded:', sessions.length);
    } else {
      logError('Sessions already exist. Skipping seeding sessions.');
    }

    const sessions = await Session.findAll();

    const existingNumbers = await Number.findAll();
    if (existingNumbers.length === 0) {
      const numbersData = [
        // session_id 1
        [12345, 3, sessions[0].id],
        [67890, 3, sessions[0].id],
        [23456, 3, sessions[0].id],
        [34567, 3, sessions[0].id],
        [45678, 3, sessions[0].id],
        [56789, 3, sessions[0].id],
        [67891, 3, sessions[0].id],
        [78901, 3, sessions[0].id],
        [89012, 3, sessions[0].id],
        [1234, 3, sessions[0].id],
        [5678, 3, sessions[0].id],
        [9101, 3, sessions[0].id],
        [2345, 3, sessions[0].id],
        [6789, 3, sessions[0].id],
        [6456, 3, sessions[0].id],
        [7891, 3, sessions[0].id],
        [1876, 3, sessions[0].id],
        [4525, 3, sessions[0].id],
        [7112, 3, sessions[0].id],
        [123, 3, sessions[0].id],
        [456, 3, sessions[0].id],
        [789, 3, sessions[0].id],
        [12, 3, sessions[0].id],
        [34, 3, sessions[0].id],
        [56, 3, sessions[0].id],
        [78, 3, sessions[0].id],
        [76098, 3, sessions[0].id],
        
        // session_id 2
        [22345, 3, sessions[1].id],
        [77897, 3, sessions[1].id],
        [33456, 3, sessions[1].id],
        [44567, 3, sessions[1].id],
        [55678, 3, sessions[1].id],
        [66789, 3, sessions[1].id],
        [77891, 3, sessions[1].id],
        [88901, 3, sessions[1].id],
        [90122, 3, sessions[1].id],
        [2234, 3, sessions[1].id],
        [6789, 3, sessions[1].id],
        [8214, 3, sessions[1].id],
        [3455, 3, sessions[1].id],
        [7899, 3, sessions[1].id],
        [4567, 3, sessions[1].id],
        [8901, 3, sessions[1].id],
        [2876, 3, sessions[1].id],
        [7525, 3, sessions[1].id],
        [8212, 3, sessions[1].id],
        [223, 3, sessions[1].id],
        [567, 3, sessions[1].id],
        [893, 3, sessions[1].id],
        [22, 3, sessions[1].id],
        [45, 3, sessions[1].id],
        [67, 3, sessions[1].id],
        [89, 3, sessions[1].id],
        [86098, 3, sessions[1].id],
        
        // session_id 3
        [32345, 3, sessions[2].id],
        [87894, 3, sessions[2].id],
        [43456, 3, sessions[2].id],
        [54567, 3, sessions[2].id],
        [65678, 3, sessions[2].id],
        [76789, 3, sessions[2].id],
        [87891, 3, sessions[2].id],
        [98901, 3, sessions[2].id],
        [51223, 3, sessions[2].id],
        [3234, 3, sessions[2].id],
        [7891, 3, sessions[2].id],
        [9321, 3, sessions[2].id],
        [4566, 3, sessions[2].id],
        [8902, 3, sessions[2].id],
        [5678, 3, sessions[2].id],
        [9012, 3, sessions[2].id],
        [3876, 3, sessions[2].id],
        [8525, 3, sessions[2].id],
        [9312, 3, sessions[2].id],
        [323, 3, sessions[2].id],
        [678, 3, sessions[2].id],
        [901, 3, sessions[2].id],
        [32, 3, sessions[2].id],
        [56, 3, sessions[2].id],
        [78, 3, sessions[2].id],
        [99, 3, sessions[2].id],
        [96098, 3, sessions[2].id],
        
        // session_id 4
        [42345, 3, sessions[3].id],
        [97892, 3, sessions[3].id],
        [53456, 3, sessions[3].id],
        [64567, 3, sessions[3].id],
        [75678, 3, sessions[3].id],
        [86789, 3, sessions[3].id],
        [97891, 3, sessions[3].id],
        [18901, 3, sessions[3].id],
        [12334, 3, sessions[3].id],
        [4234, 3, sessions[3].id],
        [8901, 3, sessions[3].id],
        [3432, 3, sessions[3].id],
        [5679, 3, sessions[3].id],
        [9012, 3, sessions[3].id],
        [4678, 3, sessions[3].id],
        [9123, 3, sessions[3].id],
        [4876, 3, sessions[3].id],
        [9525, 3, sessions[3].id],
        [9412, 3, sessions[3].id],
        [423, 3, sessions[3].id],
        [789, 3, sessions[3].id],
        [812, 3, sessions[3].id],
        [43, 3, sessions[3].id],
        [67, 3, sessions[3].id],
        [89, 3, sessions[3].id],
        [62, 3, sessions[3].id],
        [77098, 3, sessions[3].id],
        
        // session_id 5
        [52345, 1, sessions[4].id],
        [97896, 1, sessions[4].id],
        [63456, 1, sessions[4].id],
        [74567, 1, sessions[4].id],
        [85678, 1, sessions[4].id],
        [96789, 1, sessions[4].id],
        [27891, 1, sessions[4].id],
        [18901, 1, sessions[4].id],
        [23445, 1, sessions[4].id],
        [5234, 1, sessions[4].id],
        [9012, 1, sessions[4].id],
        [1543, 1, sessions[4].id],
        [6784, 1, sessions[4].id],
        [1234, 1, sessions[4].id],
        [5789, 1, sessions[4].id],
        [5976, 1, sessions[4].id],
        [6535, 1, sessions[4].id],
        [1556, 1, sessions[4].id],
        [8432, 1, sessions[4].id],
        [523, 1, sessions[4].id],
        [678, 1, sessions[4].id],
        [912, 1, sessions[4].id],
        [56, 1, sessions[4].id],
        [78, 1, sessions[4].id],
        [89, 1, sessions[4].id],
        [65, 1, sessions[4].id],
        [16098, 1, sessions[4].id],
      ];


      const numbers = numbersData.map(data => ({
        value: data[0],
        status: data[1],
        session_id: data[2],
      }));

      await Number.bulkCreate(numbers);

      logInfo('Numbers seeded:', numbers.length);
    } else {
      logError('Numbers already exist. Skipping seeding numbers.');
    }
  } catch (error) {
    logError('Error seeding data:', error);
  } finally {
    await sequelize.close();
  }
};

seedData();