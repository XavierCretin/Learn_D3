import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularComponent from 'angular-component';
import templateUrl from './photos-search.html';

class PhotosSearchCtrl {
    constructor() {
        this.searchPhoto   = '';     // set the default search/filter term
    }
}     
const name = 'photosSearch';
// create a module
export default angular.module(name, [angularMeteor,  'ngMaterial'])

.component(name, {
    templateUrl,
   /* controllerAs: name, if not define you use $ctrl in the template, if yes you use the name*/
    controller: PhotosSearchCtrl
});
