function asyncDemo() {
    console.log('First');

    setTimeout(() => {
        console.log('Inside Timeout');
    }, 2000);

    console.log('Second');
}
asyncDemo();