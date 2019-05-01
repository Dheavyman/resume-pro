const faker = require('faker');

const generateTitle = () => faker.fake(
  "{{name.jobTitle}}, {{random.words}}"
)

const titles = [];
for(let i = 0; i < 6; i += 1) {
  const title = generateTitle();
  titles.push(title);
}

const buildTitlesData = () => {
  const titlesData = [];
  titles.forEach(title => {
    const data = title.split(',')
    const titleData = {
      title: data[0],
      level: Math.floor(Math.random() * 5) + 1,
      job_description: data[1].trim(),
      low_pay: 23983,
      high_pay: 45234,
    }
    titlesData.push(titleData)
  })
  return titlesData;
}

module.exports = buildTitlesData;