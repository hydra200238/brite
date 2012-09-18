/**
 * View: MainView
 *
 * Responsibilities:
 *   - Main Screen for the application.
 *   - Will create all the necessary sub views
 *   - Manage all the application wide events
 */
(function($) {
	

	function MainView() {
	};	
	
	// --------- View Interface Implementation ---------- //
	// This is the MUST-HAVE component function that must return the new html element for this component instances
	MainView.prototype.create = function(data, config) {
		// using jsrender to render the template (since no data, could have done just .html()).
		var html = $("#tmpl-MainView").render();
		return $(html);
	}
	// --------- /View Interface Implementation ---------- //
	
	// --------- View Registration --------- //
	// Here we register the view with brite.registerView(viewName,viewConfigOverride,factoryFunction)
	brite.registerView("MainView", {emptyParent:true}, function() {
		return new MainView();
	});
	// --------- Vew Registration --------- //

})(jQuery); 