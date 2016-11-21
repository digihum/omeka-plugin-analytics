<?php

/**
 * Analytics plugin main class
 *
 * @author Tim Hollies
 */
class AnalyticsPlugin extends Omeka_Plugin_AbstractPlugin
{
    protected $_hooks = array(
        'public_head',
        'neatline_public_static',
        'install', 
        'config', 
        'config_form', 
        'uninstall'
    );

    /**
     * @var array  Options that are used in the analytics plugin.
     */
    protected $_options = array(
        'property_id' => 'UA-XXXXX-Y',
    );
 
    /**
     * Create the duration type format options form
     *
     * @param $args array
     */

    public function hookPublicHead() {
        echo get_view()->partial('config.php', array( "property_id" => get_option("property_id")));
        queue_js_file('dist/omeka-analytics.min');
    }
    
    public function hookNeatlinePublicStatic($exhibit){
        queue_js_file('dist/omeka-analytics.min');
    }

    /**
     * Installation hook.
     */
    public function hookInstall()
    {
        $this->_installOptions();
    }
    /**
     * Uninstalls any options that have been set.
     */
    public function hookUninstall()
    {
        $this->_uninstallOptions();
    }
    /**
     * Set the options from the Config form.
     */
    public function hookConfig()
    {
        foreach (array_keys($this->_options) as $key)
        {
            set_option($key, trim($_POST[$key]));
        }
    }

    /**
     * Displays the configuration form.
     */
    public function hookConfigForm()
    {
        require dirname(__FILE__) . DIRECTORY_SEPARATOR . 'views'. DIRECTORY_SEPARATOR . 'config_form.php';
    }


}
