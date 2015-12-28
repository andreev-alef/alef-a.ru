/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $(document).scroll(function () {
        $('#indicator').html(Math.ceil($(document).scrollTop() / $('.root').height() * 100));
        $('#indicator').css({
            'top': 100 + $(document).scrollTop()
        });
    });
});