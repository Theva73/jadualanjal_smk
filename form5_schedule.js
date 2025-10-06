// This file contains the schedule data for Form 5 classes.
// The schedule for 5SN1 has been corrected to match the provided PDF timetable.

const form5Schedules = [
    {
        className: "5SN1", classTeacher: "SITI ZURAIDAH MOHD KADIS",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:30", "12:30-1:30", "1:30-2:30", "2:30-3:30"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [
                { period: "7:15-8:15", subject: "PH / AS", teacher: "PN HASLINA" },
                { period: "8:15-9:15", subject: "BI", teacher: "MISS NIVETHA" },
                { period: "9:15-10:15", subject: "FIZ / BM", teacher: "PN. MALINA / CIK NAZA", location: "MAK. FIZ / -" },
                { period: "10:30-11:30", subject: "KKQ", teacher: "UST FARIS", location: "M. KOM 1" },
                { period: "11:30-12:30", subject: "MMT", teacher: "PN FAEZAH", location: "M. KOM 1" },
                { period: "12:30-1:30", subject: "MM", teacher: "CIK ZURAIDAH", location: "M. KOM 1" }
            ],
            "SELASA": [
                { period: "7:15-8:15", subject: "BM", teacher: "CIK NAZA" },
                { period: "8:15-9:15", subject: "BM", teacher: "CIK NAZA" },
                { period: "9:15-10:15", subject: "MM", teacher: "CIK ZURAIDAH" },
                { period: "10:30-11:30", subject: "PJ / PA", teacher: "EN AHMAD / PN. GURCHAN" },
                { period: "11:30-12:30", subject: "BIO", teacher: "PN NOROSNIZA", location: "MAK. BIO" },
                { period: "12:30-1:30", subject: "AS", teacher: "PN HASLINA" },
                { period: "1:30-2:30", subject: "SJ", teacher: "PN. ROSIEATI" },
                { period: "2:30-3:30", subject: "BA", teacher: "CIK NADIA" }
            ],
            "RABU": [
                { period: "7:15-8:15", subject: "KOKO" },
                { period: "8:15-9:15", subject: "BM", teacher: "CIK NAZA" },
                { period: "9:15-10:15", subject: "BM", teacher: "CIK NAZA" },
                { period: "10:30-11:30", subject: "SI / PA", teacher: "UST HAJAR / PN. GURCHAN" },
                { period: "11:30-12:30", subject: "MM / MMT", teacher: "CIK ZURAIDAH / PN FAEZAH" },
                { period: "12:30-1:30", subject: "KIM", teacher: "PN SYAMIMI", location: "MAK. KIM" },
                { period: "1:30-2:30", subject: "KKQ", teacher: "UST FARIS", location: "M. KOM 1" }
            ],
            "KHAMIS": [
                { period: "7:15-8:15", subject: "BIO / PA", teacher: "PN NOROSNIZA / PN. GURCHAN", location: "MAK. BIO / -" },
                { period: "8:15-9:15", subject: "BM", teacher: "CIK NAZA" },
                { period: "9:15-10:15", subject: "BA", teacher: "CIK NADIA" },
                { period: "10:30-11:30", subject: "SJ", teacher: "PN. ROSIEATI" },
                { period: "11:30-12:30", subject: "BI", teacher: "MISS NIVETHA" },
                { period: "12:30-1:30", subject: "KIM", teacher: "PN SYAMIMI", location: "MAK. KIM" },
                { period: "1:30-2:30", subject: "SI", teacher: "UST HAJAR", location: "M. KOM 1" }
            ],
            "JUMAAT": [
                { period: "7:15-8:15", subject: "FIZ", teacher: "PN. MALINA" },
                { period: "8:15-9:15", subject: "BI", teacher: "MISS NIVETHA" },
                { period: "9:15-10:15", subject: "PJ", teacher: "EN AHMAD / PN. GURCHAN" },
                { period: "10:30-11:30", subject: "MMT / AS", teacher: "PN FAEZAH / PN HASLINA" },
                { period: "11:30-12:30", subject: "MT", teacher: "PN HASLINA" }
            ]
        }
    },
    {
        className: "5SN2", classTeacher: "IRDA SYUHADA ISHAK",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "KIM", teacher: "CIK QALILAH", location: "MAK. KIM" }, { period: "9:15-10:15", subject: "SJ", teacher: "EN. AZHAR" }, { period: "10:30-11:30", subject: "BI", teacher: "PN. IRDA" }, { period: "11:30-12:00", subject: "BM", teacher: "CIK NASUHA" }, { period: "12:00-1:00", subject: "BIO", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "1:00-2:00", subject: "MMT", teacher: "PN. NURASHIDAH" }, { period: "2:00-3:00", subject: "FIZ", teacher: "PN ARFAH", location: "MAK. FIZ" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PI" }, { period: "9:15-10:15", subject: "PA", teacher: "PN. GURCHAN", location: "T5" }, { period: "10:30-11:30", subject: "KIM", teacher: "CIK QALILAH", location: "MAK. KIM" }, { period: "11:30-12:00", subject: "BM", teacher: "CIK NASUHA", location: "T3" }, { period: "12:00-1:00", subject: "MM", teacher: "PN LISAH" }, { period: "1:00-2:00", subject: "BC", teacher: "MISS LAU", location: "BENGKEL E" }, { period: "2:00-3:00", subject: "BT", teacher: "PN SARASWADI", location: "B. NILAM 1" } ],
            "RABU": [ { period: "7:15-8:15", subject: "BIO", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "8:15-9:15", subject: "PI/PM" }, { period: "9:15-10:15", subject: "SJ", teacher: "EN. AZHAR" }, { period: "10:30-11:30", subject: "MMT", teacher: "PN. NURASHIDAH" }, { period: "11:30-12:00", subject: "BM", teacher: "CIK NASUHA" }, { period: "12:00-1:00", subject: "MM", teacher: "PN LISAH" }, { period: "1:00-2:00", subject: "FIZ", teacher: "PN ARFAH", location: "MAK. FIZ" }, { period: "2:00-3:00", subject: "PI"} ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PA", teacher: "PN. GURCHAN" }, { period: "8:15-9:15", subject: "MM", teacher: "PN LISAH" }, { period: "9:15-10:15", subject: "PI"}, { period: "10:30-11:30", subject: "BC", teacher: "MISS LAU" }, { period: "11:30-12:00", subject: "BT", teacher: "PN SARASWADI" }, { period: "12:00-1:00", subject: "BM", teacher: "CIK NASUHA" }, { period: "1:00-2:00", subject: "BI", teacher: "PN. IRDA" }, { period: "2:00-3:00", subject: "PJ", teacher: "PN. GURCHAN" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN AHMAD" }, { period: "8:15-9:15", subject: "MM", teacher: "PN LISAH" } ]
        }
    },
    {
        className: "5AP1", classTeacher: "GURCHAN KAUR DHARAM SINGH",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-1:30", "1:30-2:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "7:15-8:15", subject: "SN M2", teacher: "PN. SUHAILA" }, { period: "9:15-10:15", subject: "PNG", teacher: "PN. HANIM" }, { period: "10:30-11:30", subject: "BM", teacher: "PN AQILAH" }, { period: "11:30-12:00", subject: "PA", teacher: "PN. GURCHAN" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN. SHARUL / MISS LAU" }, { period: "8:15-9:15", subject: "SJ", teacher: "PN. GOWRY" }, { period: "9:15-10:15", subject: "PI" }, { period: "10:30-11:30", subject: "PNG", teacher: "PN. HANIM" }, { period: "11:30-12:00", subject: "BI", teacher: "PN. IRDA" }, { period: "12:00-1:00", subject: "BM", teacher: "PN AQILAH" }, { period: "1:00-2:00", subject: "BC", teacher: "MISS LAU", location: "BENGKEL E" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PA", teacher: "PN. GURCHAN", location: "T5 & T3" }, { period: "9:15-10:15", subject: "MM", teacher: "PN. RAIHAH" }, { period: "10:30-11:30", subject: "BT", teacher: "PN SARASWADI", location: "B. NILAM" }, { period: "11:30-12:00", subject: "PI/PM"}, { period: "12:00-1:00", subject: "BI", teacher: "PN. IRDA" }, { period: "1:00-1:30", subject: "SN M2", teacher: "PN. SUHAILA" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN. SHARUL" }, { period: "8:15-9:15", subject: "MM", teacher: "PN. RAIHAH" }, { period: "9:15-10:15", subject: "PI"}, { period: "10:30-11:30", subject: "BC", teacher: "MISS LAU" }, { period: "11:30-12:00", subject: "PNG", teacher: "PN. HANIM" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "BM", teacher: "PN AQILAH" }, { period: "8:15-9:15", subject: "MM", teacher: "PN. RAIHAH" }, { period: "9:15-10:15", subject: "SN", teacher: "PN. SUHAILA" }, { period: "10:30-11:30", subject: "BI", teacher: "PN. IRDA" } ]
        }
    },
    {
        className: "5AP2", classTeacher: "HANIM SURIA HUSSIN",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "7:15-8:15", subject: "SN M1", teacher: "EN. ROZALI" }, { period: "9:15-10:15", subject: "BI", teacher: "PN. NURA" }, { period: "10:30-11:30", subject: "BM", teacher: "CIK HAZIQAH" }, { period: "11:30-12:00", subject: "PA", teacher: "EN. SHARUL" }, { period: "12:00-1:00", subject: "PNG", teacher: "PN. HANIM" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "PJ" }, { period: "8:15-9:15", subject: "SJ", teacher: "PN. KARTINI" }, { period: "9:15-10:15", subject: "PI"}, { period: "10:30-11:30", subject: "MM", teacher: "PN. IMELDA" }, { period: "11:30-12:00", subject: "BM", teacher: "CIK HAZIQAH" }, { period: "12:00-1:00", subject: "BI", teacher: "PN. NURA", location: "T5" }, { period: "1:00-2:00", subject: "PA", teacher: "EN. SHARUL", location: "T3" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PI/PM"}, { period: "9:15-10:15", subject: "PNG", teacher: "PN. HANIM" }, { period: "10:30-11:30", subject: "SN M1", teacher: "EN. ROZALI" }, { period: "11:30-12:00", subject: "MM", teacher: "PN. IMELDA" }, { period: "1:00-2:00", subject: "BC", teacher: "MISS LAU", location: "BENGKEL E" }, { period: "2:00-3:00", subject: "BT", teacher: "PN SARASWADI", location: "B. NILAM" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN. SHARUL" }, { period: "8:15-9:15", subject: "SN M1", teacher: "EN. ROZALI" }, { period: "9:15-10:15", subject: "MM", teacher: "PN. IMELDA" }, { period: "10:30-11:30", subject: "BM", teacher: "CIK HAZIQAH" }, { period: "11:30-12:00", subject: "PI"}, { period: "12:00-1:00", subject: "BC", teacher: "MISS LAU" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "BI", teacher: "PN. NURA" }, { period: "8:15-9:15", subject: "SJ", teacher: "PN. KARTINI" }, { period: "9:15-10:15", subject: "BM", teacher: "CIK HAZIQAH" }, { period: "10:30-11:30", subject: "PNG", teacher: "PN. HANIM" } ]
        }
    },
    {
        className: "5PTS1", classTeacher: "THEVANDRAN A/L BATHUMALAI",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "PNG M2 SN", teacher: "PN. SUHAILA" }, { period: "9:15-10:15", subject: "BM", teacher: "PN. EFAH" }, { period: "10:30-11:30", subject: "BM", teacher: "PN. EFAH" }, { period: "11:30-12:00", subject: "MM", teacher: "PN FAEZAH" }, { period: "12:00-1:00", subject: "PS M2 SN", teacher: "PN. SUHAILA" }, { period: "1:00-2:00", subject: "PS TAW", teacher: "PN NIK RUHAZANA" }, { period: "2:00-3:00", subject: "BI", teacher: "MR. THEVA" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PI" }, { period: "9:15-10:15", subject: "BM BI", teacher: "PN. EFAH / MR. THEVA", location: "T3" }, { period: "11:30-12:00", subject: "SJ", teacher: "EN. RIDZUAN" }, { period: "12:00-1:00", subject: "PNG", teacher: "EN. IQBAL" }, { period: "1:00-2:00", subject: "BC", teacher: "MISS LAU", location: "BENGKEL E" }, { period: "2:00-3:00", subject: "BT", teacher: "PN SARASWADI", location: "B. NILAM 1" } ],
            "RABU": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN. FAUZI" }, { period: "8:15-9:15", subject: "M2 SN", teacher: "PN. SUHAILA" }, { period: "9:15-10:15", subject: "PI/PM" }, { period: "10:30-11:30", subject: "SJ", teacher: "PN KALAI" }, { period: "11:30-12:00", subject: "MM", teacher: "PN FAEZAH" }, { period: "12:00-1:00", subject: "PS", teacher: "PN NIK RUHAZANA" }, { period: "1:00-2:00", subject: "PI" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ", teacher: "PN KALAI" }, { period: "8:15-9:15", subject: "PS", teacher: "EN. IQBAL" }, { period: "9:15-10:15", subject: "PI" }, { period: "10:30-11:30", subject: "BC", teacher: "MISS LAU" }, { period: "11:30-12:00", subject: "TAW", teacher: "UST HAJAR" }, { period: "12:00-1:00", subject: "BT", teacher: "SARASWADI" }, { period: "1:00-2:00", subject: "BI", teacher: "MR. THEVA" }, { period: "2:00-3:00", subject: "MM", teacher: "PN FAEZAH" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "BM", teacher: "PN. EFAH" }, { period: "8:15-9:15", subject: "DAPJ" }, { period: "9:15-10:15", subject: "PJ", teacher: "EN. FAUZI"} ]
        }
    },
    {
        className: "5PTS2", classTeacher: "KALAIVANI A/P ANANTHANAR",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-1:30", "1:30-2:00", "2:00-2:30"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "SJ", teacher: "PN. KARTINI" }, { period: "9:15-10:15", subject: "M1 BM SN", teacher: "PN AQILAH / EN. ROZALI" }, { period: "10:30-11:30", subject: "PNG", teacher: "PN KALAI" }, { period: "11:30-12:00", subject: "SJ", teacher: "PN. KARTINI" }, { period: "12:00-1:00", subject: "PS", teacher: "PN NIK RUHAZANA" }, { period: "1:00-1:30", "subject": "PS", "teacher": "EN. IQBAL" }, { period: "1:30-2:00", "subject": "TAW", "teacher": "UST HAJAR" }, { period: "2:00-2:30", "subject": "BI", "teacher": "PN. NURA" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "BM", teacher: "PN AQILAH" }, { period: "8:15-9:15", subject: "PNG", teacher: "PN KALAI" }, { period: "9:15-10:15", subject: "MM", teacher: "CIK ZURAIDAH" }, { period: "10:30-11:30", subject: "BC", teacher: "MISS LAU", location: "BENGKEL E" }, { period: "11:30-12:00", subject: "BT", teacher: "PN SARASWADI", location: "B. NILAM" }, { period: "12:00-1:00", subject: "BM", teacher: "PN AQILAH" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PI" }, { period: "9:15-10:15", subject: "MM", teacher: "CIK ZURAIDAH" }, { "period": "10:30-11:30", "subject": "PS", "teacher": "PN NIK RUHAZANA" }, { "period": "11:30-12:00", "subject": "PI" }, { "period": "12:00-1:00", "subject": "TAW", "teacher": "UST HAJAR" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN. FAUZI" }, { period: "8:15-9:15", subject: "BM", teacher: "PN AQILAH" }, { period: "9:15-10:15", subject: "M1 SN", teacher: "EN. ROZALI" }, { "period": "10:30-11:30", "subject": "BC", "teacher": "MISS LAU"}, {"period": "11:30-12:00", "subject": "BT", "teacher": "PN SARASWADI"} ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "PNG", teacher: "PN KALAI" }, { period: "8:15-9:15", subject: "MM", teacher: "CIK ZURAIDAH" }, { period: "9:15-10:15", subject: "SN", teacher: "EN. ROZALI" }, { period: "10:30-11:30", subject: "PJ", teacher: "EN. FAUZI"} ]
        }
    },
    {
        className: "5TS1", classTeacher: "NOROSNIZA OSMAN",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "PJ", teacher: "EN AHMAD" }, { period: "9:15-10:15", subject: "SN", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "10:30-11:30", subject: "PS", teacher: "EN. IQBAL" }, { period: "11:30-12:00", subject: "SJ", teacher: "PN. ROSIEATI" }, { period: "12:00-1:00", subject: "TAW", teacher: "UST HAJAR" }, { period: "1:00-2:00", subject: "PS", teacher: "EN. IQBAL" }, { period: "2:00-3:00", subject: "TAW", teacher: "UST HAJAR" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "BM", teacher: "CIK NASUHA" }, { period: "8:15-9:15", subject: "SN", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "9:15-10:15", subject: "SJ", teacher: "PN. ROSIEATI" }, { period: "10:30-11:30", subject: "BI MM", teacher: "MR. THEVA / PN LISAH" }, { period: "11:30-12:00", subject: "PI" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PJ", teacher: "EN AHMAD" }, { period: "9:15-10:15", subject: "BI", teacher: "MR. THEVA" }, { period: "10:30-11:30", subject: "MM", teacher: "PN LISAH" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ", teacher: "PN NURAIN" }, { period: "8:15-9:15", subject: "SJ", teacher: "PN. ROSIEATI" }, { period: "10:30-11:30", subject: "PS", teacher: "PN NIK TAWN RUHAZANA" }, { period: "11:30-12:00", subject: "PS", teacher: "EN. IQBAL" }, { period: "12:00-1:00", subject: "TAW", teacher: "UST HAJAR" }, { period: "1:00-2:00", subject: "BT/BC/IS", teacher: "SARASWADI/MISS LAU/PN. GOWRY" }, { period: "2:00-3:00", subject: "BM", teacher: "CIK NASUHA" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "BM", teacher: "CIK NASUHA" }, { period: "8:15-9:15", "subject": "B.INSAN"}, { period: "9:15-10:15", subject: "SN", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "10:30-11:30", subject: "MM", teacher: "PN LISAH" }, { period: "11:30-12:00", subject: "SJ", teacher: "PN. ROSIEATI" }, { period: "12:00-1:00", subject: "BI", teacher: "MR. THEVA" } ]
        }
    },
    {
        className: "5TS2", classTeacher: "KARTINI YA'AKUB",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "7:15-8:15", subject: "PJ", teacher: "EN AHMAD" }, { period: "9:15-10:15", subject: "SJ", teacher: "PN. KARTINI" }, { period: "10:30-11:30", subject: "M. KOM 2 BI", teacher: "PN. MASRUL" }, { period: "11:30-12:00", subject: "PS", teacher: "PN NIK" }, { period: "12:00-1:00", subject: "TAW", teacher: "UST HAJAR" }, { period: "1:00-2:00", subject: "PS", teacher: "EN. IQBAL" }, { period: "2:00-3:00", subject: "TAW", teacher: "UST HAJAR" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "PJ", teacher: "PN NURAIN" }, { period: "8:15-9:15", subject: "SJ", teacher: "PN. KARTINI" }, { period: "9:15-10:15", subject: "MM", teacher: "PN. MALINA" }, { period: "10:30-11:30", subject: "M. KOM 2 BI", teacher: "PN. MASRUL" }, { period: "11:30-12:00", subject: "PI"} ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "PJ", teacher: "EN AHMAD" }, { period: "9:15-10:15", subject: "MM", teacher: "PN. MALINA" }, { period: "12:00-1:00", subject: "SN", teacher: "PN ARFAH", location: "MAK. FIZ" }, { period: "1:00-2:00", subject: "M. KOM 2 BI", teacher: "PN. MASRUL" } ],
            "KHAMIS": [ { period: "8:15-9:15", subject: "BM", teacher: "CIK HAZIQAH" }, { period: "9:15-10:15", subject: "SN", teacher: "PN ARFAH", location: "MAK. FIZ" }, { period: "10:30-11:30", subject: "BT/BC/IS"}, { period: "11:30-12:00", "subject": "PS", "teacher": "PN NIK TAWN RUHAZANA"}, { period: "12:00-1:00", subject: "PS", teacher: "EN. IQBAL" }, { period: "1:00-2:00", subject: "SJ", teacher: "PN. KARTINI" }, { period: "2:00-3:00", subject: "TAW", teacher: "UST HAJAR" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "B.INSAN" }, { period: "8:15-9:15", "subject": "BM", "teacher": "CIK HAZIQAH"}, { "period": "9:15-10:15", "subject": "SN", "teacher": "PN ARFAH", "location": "MAK. FIZ"}, { "period": "10:30-11:30", "subject": "MM", "teacher": "PN. MALINA"} ]
        }
    },
    {
        className: "5S1", classTeacher: "NORARFAH HASIM",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "7:15-8:15", subject: "MM", teacher: "PN. RAIHAH" }, { period: "9:15-10:15", subject: "SN", teacher: "PN ARFAH", location: "MAK. FIZ" }, { period: "10:30-11:30", subject: "PS", teacher: "EN. IQBAL" }, { period: "11:30-12:00", subject: "SJ", teacher: "EN. RIDZUAN" } ],
            "SELASA": [ { "period": "9:15-10:15", "subject": "SN", "teacher": "PN ARFAH", "location": "MAK. FIZ"}, { period: "10:30-11:30", subject: "BI", teacher: "PN. ZURINA" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "SN", teacher: "PN ARFAH", location: "MAK. FIZ" }, { period: "10:30-11:30", subject: "MM", teacher: "PN. RAIHAH" }, { period: "11:30-12:00", subject: "MM", teacher: "PN. RAIHAH" }, { period: "1:00-2:00", subject: "BM", teacher: "CIK NAZA" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ" }, { period: "8:15-9:15", "subject": "PS", "teacher": "PN NIK" }, { period: "9:15-10:15", "subject": "SJ", "teacher": "EN.RIDZUAN" }, { "period": "10:30-11:30", "subject": "BM", "teacher": "CIK NAZA"}, { period: "12:00-1:00", "subject": "BM", "teacher": "CIK NAZA" } ],
            "JUMAAT": [ { period: "7:15-8:15", "subject": "B.INSAN" }, { period: "8:15-9:15", subject: "BI", teacher: "PN. ZURINA" }, { period: "9:15-10:15", subject: "MM", teacher: "PN. RAIHAH" }, { period: "10:30-11:30", "subject": "BM", "teacher": "CIK NAZA"} ]
        }
    },
    {
        className: "5S2", classTeacher: "SITI QALILAH RADIN",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "BI", teacher: "MR. THEVA" }, { period: "9:15-10:15", subject: "PS", teacher: "EN. IQBAL" }, { period: "10:30-11:30", "subject": "MM", "teacher": "PN SYAMIMI"}, { period: "12:00-1:00", subject: "SJ", teacher: "EN. AZHAR" }, { period: "1:00-2:00", subject: "MM", teacher: "PN SYAMIMI" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "SN", teacher: "CIK QALILAH", location: "MAK. KIM" }, { period: "8:15-9:15", "subject": "MM", "teacher": "PN SYAMIMI" }, { period: "9:15-10:15", "subject": "BI", "teacher": "MR. THEVA" }, { "period": "11:30-12:00", "subject": "PI"}, { period: "1:00-2:00", "subject": "BM", "teacher": "CIK NASUHA" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", subject: "MM BM", teacher: "PN SYAMIMI / CIK NASUHA" }, { period: "10:30-11:30", "subject": "PS", "teacher": "PN NIK" } ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ" }, { period: "8:15-9:15", "subject": "BM", "teacher": "CIK NASUHA" }, { period: "11:30-12:00", "subject": "SN", "teacher": "CIK QALILAH", "location": "MAK. KIM" }, { period: "12:00-1:00", "subject": "SJ", "teacher": "EN. AZHAR" } ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "B.INSAN"}, { "period": "8:15-9:15", "subject": "BI", "teacher": "MR. THEVA" }, { period: "9:15-10:15", "subject": "SN", "teacher": "CIK QALILAH", "location": "MAK. KIM" }, { "period": "10:30-11:30", "subject": "SJ", "teacher": "EN. AZHAR" } ]
        }
    },
    {
        className: "5S3", classTeacher: "EFAH SUHAILA SALAMON",
        timeSlots: ["7:15-8:15", "8:15-9:15", "9:15-10:15", "10:15-10:30", "10:30-11:30", "11:30-12:00", "12:00-1:00", "1:00-2:00"],
        rehatSlot: "10:15-10:30",
        scheduleData: {
            "ISNIN": [ { period: "8:15-9:15", subject: "BM", teacher: "PN. EFAH" }, { period: "9:15-10:15", "subject": "PS", "teacher": "EN. IQBAL" }, { period: "10:30-11:30", "subject": "SJ", "teacher": "PN.GOWRY"}, { period: "12:00-1:00", "subject": "SN", "teacher": "PN NOROSNIZA", "location": "MAK. BIO" }, { period: "1:00-2:00", "subject": "SJ", "teacher": "PN. GOWRY" } ],
            "SELASA": [ { period: "7:15-8:15", subject: "SN", teacher: "PN NOROSNIZA", location: "MAK. BIO" }, { period: "8:15-9:15", "subject": "BI", "teacher": "MISS NIVETHA" }, { period: "9:15-10:15", "subject": "BM", "teacher": "PN. EFAH" }, { period: "10:30-11:30", "subject": "MM", "teacher": "PN. IMELDA" } ],
            "RABU": [ { period: "7:15-8:15", subject: "KOKO" }, { period: "8:15-9:15", "subject": "MM", "teacher": "PN. IMELDA" }, { period: "9:15-10:15", "subject": "BM", "teacher": "PN. EFAH" }, { "period": "10:30-11:30", "subject": "PS", "teacher": "PN NIK"} ],
            "KHAMIS": [ { period: "7:15-8:15", subject: "PJ" }, { period: "9:15-10:15", "subject": "SJ", "teacher": "PN. GOWRY" }, { period: "10:30-11:30", "subject": "BI", "teacher": "MISS NIVETHA" }, { "period": "11:30-12:00", "subject": "PI"}, { period: "1:00-2:00", "subject": "BM", "teacher": "PN.EFAH"} ],
            "JUMAAT": [ { period: "7:15-8:15", subject: "PJ" }, { period: "8:15-9:15", "subject": "B.INSAN"}, { "period": "9:15-10:15", "subject": "SN", "teacher": "PN NOROSNIZA", "location": "MAK. BIO" }, { "period": "10:30-11:30", "subject": "MM", "teacher": "PN. IMELDA" }, { "period": "11:30-12:00", "subject": "BI", "teacher": "MISS NIVETHA"} ]
        }
    }
];

