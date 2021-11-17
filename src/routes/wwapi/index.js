const wwApiExample1 = async (req, res) => {

    const randomWait = Math.floor(Math.random() * (10000 - 1000) ) + 1000
    const randomErrorIndicator = Math.floor(Math.random() * 3)

    const responseData1 = {
        data: {
            average_grade: 78.4,
            className: 'Intro to Developer Experience',
            ClassProfessor: 'VINCENT P VAN DINTEL',
            NUM_OF_STUDENTS: '7',
            schedule: [
                'M', 'W', 'F'
            ],
            ['start-data']: '1/1/2021',
            ['end-date']: '1/31/2020',
            time: 1637153729
        }
    }

    const responseData2 = {
        data: {
            average_grade: 78.4,
            className: 'Intro to Developer Experience',
            ClassProfessor: 'Vincent Van Dintel',
            NUM_OF_STUDENTS: 7,
            startData: '1/1/2021',
            endDate: '1/31/2020',
            time: 1637153729
        }
    }

    if (randomErrorIndicator == 0) {
        setTimeout(() => res.status(500).send('An error occurred'), randomWait)
    } else if (randomErrorIndicator == 1) {
        setTimeout(() => res.send({ ...responseData1 }), randomWait)
    }
    else {
        setTimeout(() => res.send({ ...responseData2 }), randomWait)
    }



    
}

module.exports = {
    wwApiExample1
}