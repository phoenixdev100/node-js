const fs=require('fs');
const readlinr=require('readline').createInterface({
    input:process.stdlin,
    output:process.stdout
})

const SAMPLE_DIR=`fileModule_demo`;
const SAMPLE_FILE=`${SAMPLE_DIR}/sample.txt`;
const COPY_FILE=`${SAMPLE_DIR}/copy.txt`;

async function initialize(){
    try {
        await fs.promises.mkdir(SAMPLE_DIR, { recursive: true });
        console.log(`Directory created: ${SAMPLE_DIR}`);
        showmenu();
    } catch (error) {
        console.error('Error creating directory:', error);
    }
}

function showmenu() {
    console.log('1.C')
}