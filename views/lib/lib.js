/*
 * 使用__inline函数来嵌入其他文件
 */

__inline('scrat/scrat.js');
__inline('angular/angular.frame.js');

require.config(__FRAMEWORK_CONFIG__);

__inline('../boot/route.js');
__inline('../boot/run.js');
__inline('../boot/config.js');
__inline('../boot/app.js');