const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);
const files = ['dist', 'package.json'];

const hasDockerInstalled = async () => {
  try {
    await execAsync('docker -v');
    return true;
  } catch (error) {
    return false;
  }
};

const removeDummyContainer = async () => {
  try {
    console.log('Remove dummy container');
    await execAsync('docker rm dummy');
  } catch (error) {
    console.info('Container dummy not exist');
  }
};

async function main() {
  try {
    const hasDocker = await hasDockerInstalled();
    if (!hasDocker) {
      console.error('Docker is not installed :(');
      process.exit(0);
    }

    await removeDummyContainer();

    console.log("Validated Docker Volume 'npm-components'");
    await execAsync('docker volume inspect npm-components');

    console.log('Create dummy container');
    await execAsync(
      'docker container create --name dummy -v npm-components:/root hello-world'
    );

    console.log('Copy files and folders into volume');
    for (const file of files) {
      console.log(`\tCopying ${file}`);
      await execAsync(`docker cp ./${file} dummy:/root/${file}`);
    }

    await removeDummyContainer();

  } catch (error) {
    const { stderr } = error;
    console.log(stderr);
  }
}

main();
