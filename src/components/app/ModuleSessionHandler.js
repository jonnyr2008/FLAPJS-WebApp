import Logger from '@flapjs/util/Logger.js';
const LOGGER_TAG = 'ModuleSessionHandler';

/**
 * This is used by App.jsx to handle all Module session provider logic. Most of its
 * functions are used as callbacks for <SessionProvider/>.
 */
class ModuleSessionHandler
{
    constructor(currentModule, changeModuleCallback)
    {
        this.module = currentModule;
        this.changeModuleCallback = changeModuleCallback;

        this.onPreLoad = this.onPreLoad.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onPostLoad = this.onPostLoad.bind(this);
        this.onDidMount = this.onDidMount.bind(this);
        this.onWillUnmount = this.onWillUnmount.bind(this);
        this.onUnload = this.onUnload.bind(this);
        this.reducer = this.reducer.bind(this);
    }

    onPreLoad(session)
    {
        const currentModule = this.module;

        // Prepare session for module...
        session.module = currentModule;
        session.moduleID = currentModule ? currentModule.id : null;

        // Handle listeners...
        if (currentModule)
        {
            try
            {
                if (typeof currentModule.preload === 'function')
                {
                    currentModule.preload(session);
                }
            }
            catch(e)
            {
                Logger.error(LOGGER_TAG, 'Module failed setup session.', e);
            }
        }
    }

    onLoad(session)
    {
        const currentModule = this.module;

        // Handle listeners...
        if (currentModule)
        {
            try
            {
                if (typeof currentModule.load === 'function')
                {
                    currentModule.load(session);
                }
            }
            catch(e)
            {
                Logger.error(LOGGER_TAG, 'Module failed initialize state.', e);
            }
        }
    }

    onPostLoad(session)
    {
        const currentModule = this.module;

        // Handle listeners...
        if (currentModule)
        {
            try
            {
                if (typeof currentModule.load === 'function')
                {
                    currentModule.postload(session);
                }
            }
            catch(e)
            {
                Logger.error(LOGGER_TAG, 'Module failed initialize state.', e);
            }
        }
    }

    onDidMount(sessionProvider)
    {
        const currentModule = this.module;

        if (currentModule && typeof currentModule.onSessionDidMount === 'function')
        {
            currentModule.onSessionDidMount(sessionProvider);
        }
    }

    onWillUnmount(sessionProvider)
    {
        const currentModule = this.module;

        if (currentModule && typeof currentModule.onSessionWillUnmount === 'function')
        {
            currentModule.onSessionWillUnmount(sessionProvider);
        }
    }

    onUnload(session)
    {
        const currentModule = this.module;

        if (currentModule && typeof currentModule.unload === 'function')
        {
            currentModule.unload(session);
        }
    }

    reducer(state, action)
    {
        const currentModule = this.module;

        switch(action.type)
        {
            case 'changeModuleByID':
                this.changeModuleCallback(action.value);
                break;
            default:
                if (currentModule && typeof currentModule.reducer === 'function')
                {
                    return currentModule.reducer(state, action);
                }
        }
    }
}

export default ModuleSessionHandler;
