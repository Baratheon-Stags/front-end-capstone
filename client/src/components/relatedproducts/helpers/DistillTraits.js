module.exports = {
  distillTraits: (current, card) => {
    /* Traits = [
      {
      feature: Buttons,
      value: brass,
      currentHas: true,
      cardHas: false
      },
      {
      feature: fabric,
      value: canvas,
      currHas: false,
      cardHas: true
      }
    ]
    */
    // current = [{ feature: 'Fabric', value: 'Canvas' }];
    // card = [{ feature: 'Fabric', value: 'Canvas' }];
    const traits = [];
    // Load current features
    current.forEach((feat) => {
      const obj = {};
      obj.feature = feat.feature;
      obj.value = feat.value;
      obj.currHas = true;
      traits.push(obj);
    });
    // Load product features
    card.forEach((feat) => {
      var skip = false;
      traits.forEach((trait) => {
        if (trait.feature === feat.feature && trait.value === feat.value) {
          trait.cardHas = true;
          skip = true;
        }
      });
      if (!skip) {
        const obj = {};
        obj.feature = feat.feature;
        obj.value = feat.value;
        obj.cardHas = true;
        traits.push(obj);
      }
    });

    return traits;
  },

}
