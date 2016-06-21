import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularComponent from 'angular-component';
import templateUrl from './photos-add.html';
import templateDlgUrl from '../../dialog/photo-dialog.tpl.html';

  class DialogCtrl {
    constructor($mdDialog, photo){
      this.photo = photo;
      this.$mdDialog = $mdDialog;
    }
    closeDialog(){
      console.log("bye");
      $mdDialog.hide();
    }
    submit(){
      console.log("object");
    }
  }
  
  function DialogController($scope, $mdDialog, name) {
    $scope.name = name;
    $scope.closeDialog = function() {
      $mdDialog.hide();
    };
  }

class PhotosAddCtrl {
  constructor($mdDialog){
    this.photo = {};
    this.$mdDialog = $mdDialog;
  }
   showDialog() {
     let parentEl = angular.element(document.body);
     let dialog = 
      {
          parent: parentEl,
           templateUrl: 'imports/ui/dialog/photo-dialog.tpl.html',
          
          locals: {
            photo: this.photo
          },
          controller: DialogCtrl
        }
        
      this.$mdDialog
          .show( dialog )
    } 
}

const name = 'photosAdd';
// create a module
export default angular.module(name, [angularMeteor, 'ngMaterial'])

.component(name, {
    templateUrl,
    controller: PhotosAddCtrl
});