async function predict(img) {
    // console.log(img);
    modelpath = 'https://raw.githubusercontent.com/straxFromIbr/aliencls/main/models/tfjsmodel_h5/model.json'
    const model = await tf.loadLayersModel(modelpath);
    const tensor = tf.expandDims(tf.browser.fromPixels(img), 0);
    const prep_tensor = tf.image.resizeBilinear(tensor, [192, 192]).div(127.5).sub(1)
    const y_pred = await model.predict(prep_tensor).data();
    labelList = ['cyberman', 'dalek', 'k9', 'ood', 'slitheen', 'weeping_angel', 'zygon'];
    result = await tf.argMax(y_pred).array();
    return labelList[result];
}

var run = function () {
    predStatus = document.getElementById('predStatus')
    elm = document.getElementById('preview');
    predStatus.innerHTML = '推論中'
    predict(elm).then(value => {
        predStatus.innerHTML = '結果 : ' + value
        console.log('run', value)
    })
}