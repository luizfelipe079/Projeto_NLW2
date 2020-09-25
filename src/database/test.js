const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Luiz',
        avatar: 'https://th.bing.com/th/id/OIP.1RKxxPzew9LCvzH2-e8JuQHaE4?w=283&h=187&c=7&o=5&pid=1.7',
        whatsapp: '89895555',
        bio: 'Instrutor de Educção física'

    }

    classValue = {
        subject: 1,
        cost: '20'  
        // O proffy_id virá do banco de dados
    }

    classScheduleValues = [
        // O class_id virá pelo banco de dados após o cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 520,
            time_to: 1110
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultador dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedule)

})