const PIPELINE_EN_US = {
    'pipeline.name': 'Pipeline management',

    'pipeline.newPipeline': 'Create a new pipeline',
    'pipeline.table.index': 'Index',
    'pipeline.table.name': 'Name',
    'pipeline.table.createTime': 'Create-Time',
    'pipeline.table.creator': 'Creator',
    'pipeline.table.operation': 'Operation',
    'pipeline.table.operation.edit': 'Edit',
    'pipeline.table.operation.check': 'Check',
    'pipeline.table.operation.delete': 'Delete',
    'pipeline.table.operation.language': 'en-us',
    'pipeline.table.operation.deleteSuccess': 'Success',
    'pipeline.table.operation.deleteFailure': 'Failure',
    'pipeline.table.operation.requestFailure': 'Failure',

    'pipeline.project.runPipeline': 'Run Pipeline',
    'pipeline.project.editPipeline': 'Edit Pipeline',
    'pipeline.project.deletePipeline': 'Delete Pipeline',
    'pipeline.project.notRun': 'This pipeline has not been run',
    'pipeline.project.notRunPicture': 'Sorry, you are not running the pipeline yet',
    'pipeline.project.loading': 'Loading...',

    'pipeline.info.name': 'Pipeline Name',
    'pipeline.info.name.placeholder': 'Please enter the pipeline name',
    'pipeline.info.monitor': 'Monitor Setting',
    'pipeline.info.monitor.placeholder': 'Please select monitor setting',
    'pipeline.info.monitor.auto': 'Automatic Trigger',
    'pipeline.info.monitor.manual': 'Manual Trigger',
    'pipeline.info.monitor.timing': 'Timing Trigger',
    'pipeline.info.monitor.timing.10': '10 min',
    'pipeline.info.monitor.timing.20': '20 min',
    'pipeline.info.monitor.timing.30': '30 min',
    'pipeline.info.monitor.timing.60': '60 min',
    'pipeline.info.monitor.timing.120': '120 min',
    'pipeline.info.monitor.timing.240': '240 min',
    'pipeline.info.monitor.timing.360': '360 min',
    'pipeline.info.jenkinsfile': 'Configure Pipeline',
    'pipeline.info.hasJenkinsfile': 'Have Jenkinsfile',
    'pipeline.info.noJenkinsfile': 'No Jenkinsfile',
    'pipeline.info.save': 'Save',
    'pipeline.info.cancel': 'Cancel',
    'pipeline.info.submitting': 'Submitting...',
    'pipeline.info.saveSuccess': 'Success',
    'pipeline.info.saveFailure': 'Failure',

    'pipeline.info.apply': 'Apply Setting',
    'pipeline.info.apply.placeholder': 'Please select a apply',
    'pipeline.info.stage.add': 'Add',
    'pipeline.info.stage.title': 'Stage Setting',
    'pipeline.info.stage.name.title': 'Stage name',
    'pipeline.info.stage.name': 'Please enter a stage name',
    'pipeline.info.step.title': 'Task Setting',
    'pipeline.info.step.placeholder': 'Please select a task',
    'pipeline.info.step.tip': 'Please note the order of selection',
    'pipeline.info.step.pull': 'Pull code',
    'pipeline.info.step.maven': 'Build maven project',
    'pipeline.info.step.node': 'Build node project',
    'pipeline.info.step.djanggo': 'Build djanggo project',
    'pipeline.info.step.buildDocker': 'Build docker image',
    'pipeline.info.step.pushDocker': 'Push docker image',
    'pipeline.info.step.custom': 'Custom script',
    'pipeline.info.step.deploy': 'Deploy',

    'pipeline.info.step.pull.title': 'Pull code',
    'pipeline.info.step.pull.apply': 'Apply setting',
    'pipeline.info.step.pull.apply.error': 'Get apply failed',
    'pipeline.info.step.pull.git': 'Git',

    'pipeline.info.step.maven.title': 'Build maven',
    'pipeline.info.step.maven.tip': 'We will do the following thing(s)',
    'pipeline.info.step.maven.version': 'mvn --version',
    'pipeline.info.step.maven.clean': 'mvn -U -am clean package',

    'pipeline.info.step.node.title': 'Build node',
    'pipeline.info.step.node.tip': 'We will do the following thing(s)',
    'pipeline.info.step.node.npm.version': 'npm --version',
    'pipeline.info.step.node.node.version': 'node --version',

    'pipeline.info.step.django.title': 'Build Django',
    'pipeline.info.step.django.tip': 'We will do the following thing(s)',
    'pipeline.info.step.django.python': 'python --version',
    'pipeline.info.step.django.pip': 'pip --version',

    'pipeline.info.step.docker.apply.error': 'Get apply failed',
    'pipeline.info.step.docker.title': 'Docker setting',
    'pipeline.info.step.docker.apply': 'Apply setting',
    'pipeline.info.step.docker.environment': 'Environment setting',
    'pipeline.info.step.docker.environment.placeholder': 'Please select environment',
    'pipeline.info.step.docker.dockerUser.placeholder': 'Please select docker user',
    'pipeline.info.step.docker.repository.placeholder': 'Please select repository',

    'pipeline.info.step.shell.title': 'Custom script',
    'pipeline.info.step.shell.type': 'Script type',
    'pipeline.info.step.shell.type.placeholder': 'Please select script',
    'pipeline.info.step.shell.content': 'Script content',

    'pipeline.info.step.deploy.title': 'Deployment setting',
    'pipeline.info.step.deploy.tip': 'We deploy based on your settings in application',


};
export default PIPELINE_EN_US;
