angular.module('ui.mention', [])
.directive('uiMention', function () {
  return {
    require: ['ngModel', 'uiMention'],
    controller: 'uiMention',
    controllerAs: '$mention',
    link: function ($scope, $element, $attrs, [ngModel, uiMention]) {
      uiMention.init(ngModel);
      $element[0].addEventListener("scroll", function(evt){
        console.log(evt)
        $element.next()[0].style.top = "-"+evt.srcElement.scrollTop+"px"
      });
    }
  };
});
