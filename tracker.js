/**
 * This file is optional only if you have dynamic lis
 * if your tracker list is static, you can omit this file and declare your list width in css file
 *
 * Dependency - jquery 
 * You may need to have jquery to use the following
 * you can get jquery from - //code.jquery.com/jquery-2.1.1.min.js
 */
 
    $(document).ready(function() {
			$('.progress-tracker li').each(function() {
				$(this).width(100/$('.progress-tracker li').length+'%');
			});
		});
		
