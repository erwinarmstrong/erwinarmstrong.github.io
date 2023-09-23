const characterMap = [
    { value: '***', label: ' ' },
    { value: '360', label: '360' },
    { value: '359', label: '359' },
    { value: '358', label: '358' },
    { value: '357', label: '357' },
    { value: '356', label: '356' },
    { value: '355', label: '355' },
    { value: '354', label: '354' },
    { value: '353', label: '353' },
    { value: '352', label: '352' },
    { value: '351', label: '351' },
    { value: '350', label: '350' },
    { value: '349', label: '349' },
    { value: '348', label: '348' },
    { value: '347', label: '347' },
    { value: '346', label: '346' },
    { value: '345', label: '345' },
    { value: '344', label: '344' },
    { value: '343', label: '343' },
    { value: '342', label: '342' },
    { value: '341', label: '341' },
    { value: '340', label: '340' },
    { value: '339', label: '339' },
    { value: '338', label: '338' },
    { value: '337', label: '337' },
    { value: '336', label: '336' },
    { value: '335', label: '335' },
    { value: '334', label: '334' },
    { value: '333', label: '333' },
    { value: '332', label: '332' },
    { value: '331', label: '331' },
    { value: '330', label: '330' },
    { value: '329', label: '329' },
    { value: '328', label: '328' },
    { value: '327', label: '327' },
    { value: '326', label: '326' },
    { value: '325', label: '325' },
    { value: '324', label: '324' },
    { value: '323', label: '323' },
    { value: '322', label: '322' },
    { value: '321', label: '321' },
    { value: '320', label: '320' },
    { value: '319', label: '319' },
    { value: '318', label: '318' },
    { value: '317', label: '317' },
    { value: '316', label: '316' },
    { value: '315', label: '315' },
    { value: '314', label: '314' },
    { value: '313', label: '313' },
    { value: '312', label: '312' },
    { value: '311', label: '311' },
    { value: '310', label: '310' },
    { value: '309', label: '309' },
    { value: '308', label: '308' },
    { value: '307', label: '307' },
    { value: '306', label: '306' },
    { value: '305', label: '305' },
    { value: '304', label: '304' },
    { value: '303', label: '303' },
    { value: '302', label: '302' },
    { value: '301', label: '301' },
    { value: '300', label: '300' },
    { value: '299', label: '299' },
    { value: '298', label: '298' },
    { value: '297', label: '297' },
    { value: '296', label: '296' },
    { value: '295', label: '295' },
    { value: '294', label: '294' },
    { value: '293', label: '293' },
    { value: '292', label: '292' },
    { value: '291', label: '291' },
    { value: '290', label: '290' },
    { value: '289', label: '289' },
    { value: '288', label: '288' },
    { value: '287', label: '287' },
    { value: '286', label: '286' },
    { value: '285', label: '285' },
    { value: '284', label: '284' },
    { value: '283', label: '283' },
    { value: '282', label: '282' },
    { value: '281', label: '281' },
    { value: '280', label: '280' },
    { value: '279', label: '279' },
    { value: '278', label: '278' },
    { value: '277', label: '277' },
    { value: '276', label: '276' },
    { value: '275', label: '275' },
    { value: '274', label: '274' },
    { value: '273', label: '273' },
    { value: '272', label: '272' },
    { value: '271', label: '271' },
    { value: '270', label: '270' },
    { value: '269', label: '269' },
    { value: '268', label: '268' },
    { value: '267', label: '267' },
    { value: '266', label: '266' },
    { value: '265', label: '265' },
    { value: '264', label: '264' },
    { value: '263', label: '263' },
    { value: '262', label: '262' },
    { value: '261', label: '261' },
    { value: '260', label: '260' },
    { value: '259', label: '259' },
    { value: '258', label: '258' },
    { value: '257', label: '257' },
    { value: '256', label: '256' },
    { value: '255', label: '255' },
    { value: '254', label: '254' },
    { value: '253', label: '253' },
    { value: '252', label: '252' },
    { value: '251', label: '251' },
    { value: '250', label: '250' },
    { value: '249', label: '249' },
    { value: '248', label: '248' },
    { value: '247', label: '247' },
    { value: '246', label: '246' },
    { value: '245', label: '245' },
    { value: '244', label: '244' },
    { value: '243', label: '243' },
    { value: '242', label: '242' },
    { value: '241', label: '241' },
    { value: '240', label: '240' },
    { value: '239', label: '239' },
    { value: '238', label: '238' },
    { value: '237', label: '237' },
    { value: '236', label: '236' },
    { value: '235', label: '235' },
    { value: '234', label: '234' },
    { value: '233', label: '233' },
    { value: '232', label: '232' },
    { value: '231', label: '231' },
    { value: '230', label: '230' },
    { value: '229', label: '229' },
    { value: '228', label: '228' },
    { value: '227', label: '227' },
    { value: '226', label: '226' },
    { value: '225', label: '225' },
    { value: '224', label: '224' },
    { value: '223', label: '223' },
    { value: '222', label: '222' },
    { value: '221', label: '221' },
    { value: '220', label: '220' },
    { value: '219', label: '219' },
    { value: '218', label: '218' },
    { value: '217', label: '217' },
    { value: '216', label: '216' },
    { value: '215', label: '215' },
    { value: '214', label: '214' },
    { value: '213', label: '213' },
    { value: '212', label: '212' },
    { value: '211', label: '211' },
    { value: '210', label: '210' },
    { value: '209', label: '209' },
    { value: '208', label: '208' },
    { value: '207', label: '207' },
    { value: '206', label: '206' },
    { value: '205', label: '205' },
    { value: '204', label: '204' },
    { value: '203', label: '203' },
    { value: '202', label: '202' },
    { value: '201', label: '201' },
    { value: '200', label: '200' },
    { value: '199', label: '199' },
    { value: '198', label: '198' },
    { value: '197', label: '197' },
    { value: '196', label: '196' },
    { value: '195', label: '195' },
    { value: '194', label: '194' },
    { value: '193', label: '193' },
    { value: '192', label: '192' },
    { value: '191', label: '191' },
    { value: '190', label: '190' },
    { value: '189', label: '189' },
    { value: '188', label: '188' },
    { value: '187', label: '187' },
    { value: '186', label: '186' },
    { value: '185', label: '185' },
    { value: '184', label: '184' },
    { value: '183', label: '183' },
    { value: '182', label: '182' },
    { value: '181', label: '181' },
    { value: '180', label: '180' },
    { value: '179', label: '179' },
    { value: '178', label: '178' },
    { value: '177', label: '177' },
    { value: '176', label: '176' },
    { value: '175', label: '175' },
    { value: '174', label: '174' },
    { value: '173', label: '173' },
    { value: '172', label: '172' },
    { value: '171', label: '171' },
    { value: '170', label: '170' },
    { value: '169', label: '169' },
    { value: '168', label: '168' },
    { value: '167', label: '167' },
    { value: '166', label: '166' },
    { value: '165', label: '165' },
    { value: '164', label: '164' },
    { value: '163', label: '163' },
    { value: '162', label: '162' },
    { value: '161', label: '161' },
    { value: '160', label: '160' },
    { value: '159', label: '159' },
    { value: '158', label: '158' },
    { value: '157', label: '157' },
    { value: '156', label: '156' },
    { value: '155', label: '155' },
    { value: '154', label: '154' },
    { value: '153', label: '153' },
    { value: '152', label: '152' },
    { value: '151', label: '151' },
    { value: '150', label: '150' },
    { value: '149', label: '149' },
    { value: '148', label: '148' },
    { value: '147', label: '147' },
    { value: '146', label: '146' },
    { value: '145', label: '145' },
    { value: '144', label: '144' },
    { value: '143', label: '143' },
    { value: '142', label: '142' },
    { value: '141', label: '141' },
    { value: '140', label: '140' },
    { value: '139', label: '139' },
    { value: '138', label: '138' },
    { value: '137', label: '137' },
    { value: '136', label: '136' },
    { value: '135', label: '135' },
    { value: '134', label: '134' },
    { value: '133', label: '133' },
    { value: '132', label: '132' },
    { value: '131', label: '131' },
    { value: '130', label: '130' },
    { value: '129', label: '129' },
    { value: '128', label: '128' },
    { value: '127', label: '127' },
    { value: '126', label: '126' },
    { value: '125', label: '125' },
    { value: '124', label: '124' },
    { value: '123', label: '123' },
    { value: '122', label: '122' },
    { value: '121', label: '121' },
    { value: '120', label: '120' },
    { value: '119', label: '119' },
    { value: '118', label: '118' },
    { value: '117', label: '117' },
    { value: '116', label: '116' },
    { value: '115', label: '115' },
    { value: '114', label: '114' },
    { value: '113', label: '113' },
    { value: '112', label: '112' },
    { value: '111', label: '111' },
    { value: '110', label: '110' },
    { value: '109', label: '109' },
    { value: '108', label: '108' },
    { value: '107', label: '107' },
    { value: '106', label: '106' },
    { value: '105', label: '105' },
    { value: '104', label: '104' },
    { value: '103', label: '103' },
    { value: '102', label: '102' },
    { value: '101', label: '101' },
    { value: '100', label: '100' },
    { value: '099', label: '99' },
    { value: '098', label: '98' },
    { value: '097', label: '97' },
    { value: '096', label: '96' },
    { value: '095', label: '95' },
    { value: '094', label: '94' },
    { value: '093', label: '93' },
    { value: '092', label: '92' },
    { value: '091', label: '91' },
    { value: '090', label: '90' },
    { value: '089', label: '89' },
    { value: '088', label: '88' },
    { value: '087', label: '87' },
    { value: '086', label: '86' },
    { value: '085', label: '85' },
    { value: '084', label: '84' },
    { value: '083', label: '83' },
    { value: '082', label: '82' },
    { value: '081', label: '81' },
    { value: '080', label: '80' },
    { value: '079', label: '79' },
    { value: '078', label: '78' },
    { value: '077', label: '77' },
    { value: '076', label: '76' },
    { value: '075', label: '75' },
    { value: '074', label: '74' },
    { value: '073', label: '73' },
    { value: '072', label: '72' },
    { value: '071', label: '71' },
    { value: '070', label: '70' },
    { value: '069', label: '69' },
    { value: '068', label: '68' },
    { value: '067', label: '67' },
    { value: '066', label: '66' },
    { value: '065', label: '65' },
    { value: '064', label: '64' },
    { value: '063', label: '63' },
    { value: '062', label: '62' },
    { value: '061', label: '61' },
    { value: '060', label: '60' },
    { value: '059', label: '59' },
    { value: '058', label: '58' },
    { value: '057', label: '57' },
    { value: '056', label: '56' },
    { value: '055', label: '55' },
    { value: '054', label: '54' },
    { value: '053', label: '53' },
    { value: '052', label: '52' },
    { value: '051', label: '51' },
    { value: '050', label: '50' },
    { value: '049', label: '49' },
    { value: '048', label: '48' },
    { value: '047', label: '47' },
    { value: '046', label: '46' },
    { value: '045', label: '45' },
    { value: '044', label: '44' },
    { value: '043', label: '43' },
    { value: '042', label: '42' },
    { value: '041', label: '41' },
    { value: '040', label: '40' },
    { value: '039', label: '39' },
    { value: '038', label: '38' },
    { value: '037', label: '37' },
    { value: '036', label: '36' },
    { value: '035', label: '35' },
    { value: '034', label: '34' },
    { value: '033', label: '33' },
    { value: '032', label: '32' },
    { value: '031', label: '31' },
    { value: '030', label: '30' },
    { value: '029', label: '29' },
    { value: '028', label: '28' },
    { value: '027', label: '27' },
    { value: '026', label: '26' },
    { value: '025', label: '25' },
    { value: '024', label: '24' },
    { value: '023', label: '23' },
    { value: '022', label: '22' },
    { value: '021', label: '21' },
    { value: '020', label: '20' },
    { value: '019', label: '19' },
    { value: '018', label: '18' },
    { value: '017', label: '17' },
    { value: '016', label: '16' },
    { value: '015', label: '15' },
    { value: '014', label: '14' },
    { value: '013', label: '13' },
    { value: '012', label: '12' },
    { value: '011', label: '11' },
    { value: '010', label: '10' },
    { value: '009', label: '9' },
    { value: '008', label: '8' },
    { value: '007', label: '7' },
    { value: '006', label: '6' },
    { value: '005', label: '5' },
    { value: '004', label: '4' },
    { value: '003', label: '3' },
    { value: '002', label: '2' },
    { value: '001', label: '1' },
    { value: '000', label: '0' }
];

export default characterMap;
