const Province = require('./Province');
const districts = require('./districts');

const provinces = [];

provinces.push(new Province(1, 'Province 1','Biratnagar', 25905, 4534943, districts.filter(district => district.province === 1)));
provinces.push(new Province(2, 'Province 2','Janakpur', 9661, 5404416, districts.filter(district => district.province === 2)));
provinces.push(new Province(3, 'Province 3','Hetauda', 20300, 5529452, districts.filter(district => district.province === 3)));
provinces.push(new Province(4, 'Gandaki Pradesh', 'Pokhara', 21733, 2403757, districts.filter(district => district.province === 4)));
provinces.push(new Province(5, 'Province 5', 'Butwal', 22288, 4499272, districts.filter(district => district.province === 5)));
provinces.push(new Province(6, 'Karnali Pradesh', 'Birendranagar', 27984, 1570418, districts.filter(district => district.province === 6)));
provinces.push(new Province(7, 'Sudurpashchim Pradesh', 'Godawari', 19539, 2552517, districts.filter(district => district.province === 7)));

module.exports = provinces;
