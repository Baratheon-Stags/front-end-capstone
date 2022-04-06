module.exports = {

  findAverageRating: (obj) => {
    let total = 0;
    const count = Object.values(obj).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
    for (const k in obj) {
      total += k * obj[k];
    }
    const average = Number((total / count).toFixed(1));
    const percentage = average * 20
    const roundedPercentage = Math.round((percentage) / 5) * 5;
    return {
      average,
      roundedPercentage,
    };
  },

  findRatingDistribution: (obj) => {
    let total = 0;
    let distribution = {};
    for (const k in obj) {
      total += parseInt(obj[k])
    }
    for (const k in obj) {
      distribution[k] = obj[k] / total * 100;
    }
    return distribution;
  }
}