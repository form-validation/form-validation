var data = [
    {
        country: 'Argentinia',
        adjective: 'Argentinian',
        abbr: 'DNI',
        code: 'AR',
        validExamples: ['20.123.456', '20123456'],
        invalidExamples: ['2012345699']
    },
    {
        country: 'Bosnia and Herzegovina',
        adjective: 'Bosnian and Herzegovinan',
        abbr: 'JMBG',
        code: 'BA',
        validExamples: ['0101006100008'],
        invalidExamples: ['0101006500006']
    },
    {
        country: 'Brazil',
        adjective: 'Brazilian',
        abbr: 'CPF',
        code: 'BR',
        validExamples: ['39053344705', '390.533.447-05', '111.444.777-35'],
        invalidExamples: ['231.002.999-00', '000.000.000-00']
    },
    {
        country: 'Bulgari',
        adjective: 'Bulgarian',
        abbr: 'EGN',
        code: 'BG',
        validExamples: ['7523169263', '8032056031', '803205 603 1', '8001010008', '7501020018', '7552010005', '7542011030'],
        invalidExamples: ['8019010008']
    },
    {
        country: 'Chile',
        adjective: 'Chilean',
        abbr: 'RUN/RUT',
        code: 'CL',
        validExamples: ['76086428-5', '22060449-7', '12531909-2','12937893-K','12937893-k'],
        invalidExamples: ['76080439-5', '9260865-3', '76079469-2', '76436260-4', '10601212-6']
    },
    { 
        country: 'China',
        adjective: 'Chinese',
        abbr: 'RIC',
        code: 'CN',
        validExamples: ['450202201409072332', '22011219930407001X', '110108601017023'],
        invalidExamples: ['999999199304070016']
    },
    {
        country: 'Colombia',
        adjective: 'Colombian',
        abbr: 'NIT',
        code: 'CO',
        validExamples: ['2131234321', '213.123.432-1'],
        invalidExamples: ['2131234325']
    },
    { 
        country: 'Croatia', 
        adjective: 'Croatian',
        abbr: 'OIB', 
        code: 'HR',
        validExamples: ['33392005961'],
        invalidExamples: ['33392005962']
    },
    { 
        country: 'Czech',
        adjective: 'Czech',
        abbr: 'RC',
        code: 'CZ',
        validExamples: ['7103192745', '991231123'],
        invalidExamples: ['1103492745', '590312123']
    },
    { 
        country: 'Denmark',
        adjective: 'Danish',
        abbr: 'CPR',
        code: 'DK',
        validExamples: ['2110625629', '211062-5629'],
        invalidExamples: ['511062-5629']
    },
    { 
        country: 'Estonia',
        adjective: 'Estonian',
        abbr: 'isikukood',
        code: 'EE',
        validExamples: ['37605030299'],
        invalidExamples: ['37605030291']
    },
    { 
        country: 'Finland',
        adjective: 'Finnish',
        abbr: 'HETU', 
        code: 'FI', 
        validExamples: ['311280-888Y', '131052-308T'],
        invalidExamples: ['131052-308U', '310252-308Y']
    },
    {
        country: 'France',
        adjective: 'French',
        abbr: 'NIR',
        code: 'FR',
        validExamples: ['295109912611193', '253072B07300470', '253072A07300443'],
        invalidExamples: ['295109912611199', '253072C07300443', '6546546546546703']
    },
    {
        country: 'Hong Kong',
        adjective: 'Hong Kong',
        abbr: 'HKID',
        code: 'HK',
        validExamples: ['LD1625407', 'R2496894', 'H7164108', 'P5537227'],
        invalidExamples: ['G5661828', 'Y838437B', 'R2496896']
    },
    { 
        country: 'Iceland',
        adjective: 'Icelandic',
        abbr: 'Kennitala', 
        code: 'IS', 
        validExamples: ['120174-3399', '1201743399', '0902862349'],
        invalidExamples: ['1201743389', '0902862549']
    },
    {
        country: 'India',
        adjective: 'Indian',
        abbr: 'Aadhaar',
        code: 'ID',
        validExamples: ['496858245152', '234123412346'],
        invalidExamples: ['496858245153', '123412341234', '234123412347', '643343121']
    },
    { 
        country: 'Ireland', 
        adjective: 'Irish',
        abbr: 'PPS', 
        code: 'IE', 
        validExamples: ['6433435F', '6433435FT', '6433435FW', '6433435OA', '6433435IH', '1234567TW', '1234567FA'],
        invalidExamples: ['6433435E', '6433435VH']
    },
    { 
        country: 'Israel', 
        adjective: 'Israeli',
        abbr: 'Mispar Zehut', 
        code: 'IL', 
        validExamples: ['039337423', '231740705', '339677395'],
        invalidExamples: ['001200343', '39337422', '490154203237518']
    },
    {
        country: 'Korea',
        adjective: 'Korean',
        abbr: 'RRN',
        code: 'KR',
        validExamples: ['941106-6730661', '701112-2606161', '770108-6137881', '8405206403450', '7107231587592'],
        invalidExamples: ['860924-5568406', '780206-1000824', '8005151116295', '8310196419008', '880707-1705641']
    },
    { 
        country: 'Latvia', 
        adjective: 'Latvian',
        abbr: 'Personas kods', 
        code: 'LV', 
        validExamples: ['161175-19997', '16117519997'],
        invalidExamples: ['161375-19997']
    },
    { 
        country: 'Lithuania',
        adjective: 'Lithuanian',
        abbr: 'Asmens kodas', 
        code: 'LT', 
        validExamples: ['38703181745'],
        invalidExamples: ['38703181746', '78703181745', '38703421745']
    },
    { 
        country: 'Macedonia',
        adjective: 'Macedonian',
        abbr: 'ЕМБГ', 
        code: 'MK', 
        validExamples: ['0101006410007'],
        invalidExamples: ['0101006420216', '0101006430038']
    },
    {
        country: 'Malaysia',
        adjective: 'Malaysian',
        abbr: 'NRIC',
        code: 'MY',
        validExamples: ['770305021234'],
        invalidExamples: ['771305021234', '770305171234']
    },
    {
        country: 'Mexico',
        adjective: 'Mexican',
        abbr: 'CURP',
        code: 'MX',
        validExamples: ['BOXW310820HNERXN09', 'HEGG560427MVZRRL04'],
        invalidExamples: ['BOXW310820HNERXN08']
    },
    { 
        country: 'Montenegro',
        adjective: 'Montenegrin',
        abbr: 'JMBG', 
        code: 'ME', 
        validExamples: ['0101006210008'],
        invalidExamples: ['0101006220276', '0101006230045']
    },
    { 
        country: 'Netherlands',
        adjective: 'Dutch', 
        abbr: 'BSN', 
        code: 'NL', 
        validExamples: ['111222333', '941331490', '9413.31.490'],
        invalidExamples: ['941331491'] 
    },
    {
        country: 'Norway',
        adjective: 'Norwegian',
        abbr: 'Fødselsnummer',
        code: 'NO',
        validExamples: ['68413152112'],
        invalidExamples: ['68413152113']
    },
    {
        country: 'Peru',
        adjective: 'Peruvian',
        abbr: 'CUI',
        code: 'PE',
        validExamples: ['10117410', '101174102', '434518267', '10117410G'],
        invalidExamples: ['101174103', '10117410H']
    },
    { 
        country: 'Poland',
        adjective: 'Polish', 
        abbr: 'PESEL', 
        code: 'PL', 
        validExamples: ['83010411457', '87123116221'],
        invalidExamples: ['39100413824', '36032806768', '04271113861']
    },
    { 
        country: 'Romania',
        adjective: 'Romanian',
        abbr: 'CNP', 
        code: 'RO', 
        validExamples: ['1630615123457', '1800101221144',],
        invalidExamples: ['8800101221144', '1632215123457', '1630615123458']
    },
    { 
        country: 'San Marino',
        adjective: 'Sanmarinese',
        abbr: '', 
        code: 'SM', 
        validExamples: ['23567', '89145', '24792'],
        invalidExamples: ['134923', '1894', '197854']
    },
    { 
        country: 'Serbia',
        adjective: 'Serbian',
        abbr: 'JMBG', 
        code: 'RS', 
        validExamples: ['0101006701001', '0101006750045'],
        invalidExamples: ['0101006720216', '0101006750038']
    },
    { 
        country: 'Slovakia',
        adjective: 'Slovak', 
        abbr: 'RC', 
        code: 'SK', 
        validExamples: ['7103192745', '991231123'],
        invalidExamples: ['7103192746', '1103492745']
    },
    { 
        country: 'Slovenia',
        adjective: 'Slovenian',
        abbr: 'EMŠO', 
        code: 'SI', 
        validExamples: ['0101006500006'],
        invalidExamples: ['0101006500007', '010100650000'] 
    },
    { 
        country: 'South Africa',
        adjective: 'South African',
        abbr: 'South African ID', 
        code: 'ZA', 
        validExamples: ['8001015009087'],
        invalidExamples: ['8001015009287', '8001015009086']
    },
    { 
        country: 'Spain',
        adjective: 'Spanish', 
        abbr: 'DNI/NIE/CIF', 
        code: 'ES', 
        validExamples: ['54362315K', '54362315-K', 'X2482300W', 'X-2482300W', 'X-2482300-W'],
        invalidExamples: ['54362315Z', 'X-2482300A']
    },
    { 
        country: 'Sweden',
        adjective: 'Swedish',
        abbr: 'personnummer', 
        code: 'SE', 
        validExamples: ['8112289874', '811228-9874', '811228+9874'],
        invalidExamples: ['811228-9873']
    },
    { 
        country: 'Switzerland', 
        adjective: 'Swiss',
        abbr: 'AHV-Nr/No AVS', 
        code: 'CH', 
        validExamples: ['756.1234.5678.95', '7561234567895'],
        invalidExamples: ['7482234567895'] 
    },
    {
        country: 'Taiwan',
        adjective: 'Taiwanese',
        abbr: '',
        code: 'TW',
        validExamples: ['U267859590', 'H156690065', 'M214228886'],
        invalidExamples: ['J249349093', 'B265162812', 'X233583559']
    },
    { 
        country: 'Thailand', 
        adjective: 'Thai',
        abbr: '', 
        code: 'TH', 
        validExamples: ['7145620509547', '3688699975685', '2368719339716'],
        invalidExamples: ['1100800092310']
    },
    {
        country: 'Uruguay',
        adjective: 'Uruguayan',
        abbr: '',
        code: 'UY',
        validExamples: ['12345672'],
        invalidExamples: ['12345673']
    },
];

export { data as a };
