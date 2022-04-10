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
    //  current = [{feature: 'Fabric', value: 'Canvas'}];
    //  card = [{feature: 'Fabric', value: 'Canvas'}];
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
      const obj = {};
      obj.feature = feat.feature;
      obj.value = feat.value;
      obj.cardHas = true;
      traits.push(obj);
    });

    return traits;
  },

}
