import classnames from 'classnames';
(function (blocks, i18n, element, editor, components) {
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const {Fragment} = wp.element;
    const {MediaUpload, AlignmentToolbar, InspectorControls, InnerBlocks, PanelColorSettings, BlockAlignmentToolbar} = wp.editor;
    const {PanelBody, TextControl, Button, SelectControl, RangeControl, ToggleControl} = wp.components;
    const multipleBlockIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 612 612">
        <g>
            <path
                d="M1.659,484.737L1.001,206.595c-0.032-13.686,13.95-22.938,26.534-17.559l253.206,108.241c6.997,2.991,11.542,9.859,11.56,17.468l0.658,278.142c0.032,13.687-13.95,22.939-26.534,17.56L13.219,502.206C6.222,499.215,1.676,492.347,1.659,484.737z M581.805,219.687L348.142,320.883l0.608,257.406l233.664-101.196L581.805,219.687 M591.26,186.131c10.043-0.025,19.056,8.054,19.081,19.022l0.658,278.142c0.018,7.609-4.495,14.5-11.478,17.523l-252.69,109.438c-2.493,1.079-5.047,1.583-7.534,1.59c-10.044,0.023-19.058-8.055-19.083-19.022l-0.658-278.143c-0.019-7.609,4.495-14.5,11.479-17.523l252.69-109.437C586.218,186.64,588.771,186.137,591.26,186.131L591.26,186.131z M304.152,29.466L61.767,137.691l242.894,107.075l242.386-108.224L304.152,29.466 M304.083,0c2.632-0.006,5.266,0.533,7.728,1.618l266.403,117.439c15.112,6.663,15.163,28.088,0.082,34.821L312.451,272.577c-2.456,1.097-5.088,1.648-7.721,1.655c-2.632,0.006-5.266-0.533-7.728-1.618L30.6,155.175c-15.113-6.662-15.163-28.088-0.083-34.821L296.361,1.655C298.818,0.558,301.449,0.006,304.083,0L304.083,0z"/>
        </g>
    </svg>;
    /*
     **   Block: MultiPurpose Gutenberg Block
     */
    registerBlockType('md/multipurpose-gutenberg-block', {
        title: __('Multi Purpose Block'),
        description: __('Use one block containing multiple elements.'),
        icon: multipleBlockIcon,
        category: 'mdelement',
        attributes: {
            ElementTag: {
                type: 'string',
                default: 'div'
            },
            elementID: {
                type: 'string'
            },
            backgroundImage: {
                type: 'string',
                default: ''
            },
            backgroundColor: {
                type: 'string',
                default: ''
            },
            backgroundSize: {
                type: 'boolean',
                default: false,
            },
            backgroundPosition: {
                type: 'string',
                default: '',
            },
            backgroundAttachment: {
                type: 'boolean',
                default: false,
            },
            layout: {
                type: 'string',
                default: ''
            },
            borderStyle: {
                type: 'string',
                default: '',
            },
            borderWidth: {
                type: 'number',
            },
            borderColor: {
                type: 'string',
            },
            borderRadius: {
                type: 'number',
            },
            topBorderStyle: {
                type: 'string',
                default: ''
            },
            topBorderWidth: {
                type: 'number',
            },
            topBorderColor: {
                type: 'string',
            },
            topBorderRadius: {
                type: 'number',
            },
            bottomBorderStyle: {
                type: 'string',
                default: ''
            },
            bottomBorderWidth: {
                type: 'number',
            },
            bottomBorderColor: {
                type: 'string',
            },
            bottomBorderRadius: {
                type: 'number',
            },
            rightBorderStyle: {
                type: 'string',
                default: ''
            },
            rightBorderWidth: {
                type: 'number',
            },
            rightBorderColor: {
                type: 'string',
            },
            rightBorderRadius: {
                type: 'number',
            },
            leftBorderStyle: {
                type: 'string',
                default: ''
            },
            leftBorderWidth: {
                type: 'number',
            },
            leftBorderColor: {
                type: 'string',
            },
            leftBorderRadius: {
                type: 'number',
            },
            blockAlign: {
                type: 'string',
                default: 'center'
            },
            textAlign: {
                type: 'string',
                default: ''
            },
            width: {
                type: 'string',
                default: ''
            },
            height: {
                type: 'string',
                default: ''
            },
            opacity: {
                type: 'number',
                default: 0
            },
            overlayColor: {
                type: 'string',
            },
            paddingTop: {
                type: 'string',
                default: ''
            },
            paddingRight: {
                type: 'string',
                default: ''
            },
            paddingBottom: {
                type: 'string',
                default: ''

            },
            paddingLeft: {
                type: 'string',
                default: ''
            },
            marginTop: {
                type: 'string',
                default: ''
            },
            marginRight: {
                type: 'string',
                default: ''
            },
            marginBottom: {
                type: 'string',
                default: ''

            },
            marginLeft: {
                type: 'string',
                default: ''
            },
            gradientRange1: {
                type: 'number',
                default: 0
            },
            gradientRange2: {
                type: 'number',
                default: 0
            },
            gradientRange3: {
                type: 'number',
                default: 0
            },
            color1: {
                type: 'string',
                default: '#fff'
            },
            color2: {
                type: 'string',
                default: '#fff'
            },
            color3: {
                type: 'string',
                default: '#fff'
            },
            gradientType: {
                type: 'string',
                default: ''
            },
        },
        edit(props){
            const {attributes, setAttributes, className} = props;
            const {
                backgroundImage,
                backgroundColor,
                backgroundSize,
                backgroundPosition,
                backgroundAttachment,
                layout,
                borderStyle,
                borderWidth,
                borderColor,
                borderRadius,
                blockAlign,
                textAlign,
                width,
                height,
                opacity,
                overlayColor,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                gradientRange1,
                gradientRange2,
                gradientRange3,
                color1,
                color2,
                color3,
                gradientType,
                topBorderStyle,
                topBorderWidth,
                topBorderColor,
                topBorderRadius,
                bottomBorderStyle,
                bottomBorderWidth,
                bottomBorderColor,
                bottomBorderRadius,
                rightBorderStyle,
                rightBorderWidth,
                rightBorderColor,
                rightBorderRadius,
                leftBorderStyle,
                leftBorderWidth,
                leftBorderColor,
                leftBorderRadius,
                ElementTag,
                elementID
            } = attributes;
            const onSelectLayout = event => {
                const selectedLayout = event.target.value;
                const selectedClass = event.target.className;
                'components-button button has-tooltip active' === selectedClass && setAttributes({layout: ''});
                'components-button button has-tooltip active' !== selectedClass && setAttributes({layout: selectedLayout ? selectedLayout : ''});
            };

            const onSelectTagType = event => {
                setAttributes({ElementTag: event.target.value ? event.target.value : 'div'})
            };

            const classes = classnames(
                className,
                layout && `has-${ layout }`,
                blockAlign && `is-block-${blockAlign}`,
                width && `has-custom-width`,
                {
                    'has-background-size': backgroundSize,
                    'has-background-attachment': backgroundAttachment,
                    'has-background-opacity': opacity !== 0,

                },
                opacityRatioToClass(opacity)
            );
            const style = {};
            backgroundImage && (style.backgroundImage = `url(${backgroundImage})` );
            backgroundColor && (style.backgroundColor = backgroundColor);
            backgroundPosition && (style.backgroundPosition = backgroundPosition);
            textAlign && (style.textAlign = textAlign);
            width && (style.width = width + '%');
            height && (style.height = height + 'px');
            overlayColor && (style.backgroundColor = overlayColor);
            paddingTop && (style.paddingTop = paddingTop + 'px');
            paddingRight && (style.paddingRight = paddingRight + 'px');
            paddingBottom && (style.paddingBottom = paddingBottom + 'px');
            paddingLeft && (style.paddingLeft = paddingLeft + 'px');
            marginTop && (style.marginTop = marginTop + 'px');
            marginRight && (style.marginRight = marginRight + 'px');
            marginBottom && (style.marginBottom = marginBottom + 'px');
            marginLeft && (style.marginLeft = marginLeft + 'px');
            (gradientType && ( color1 !== '#fff' || color2 !== '#fff' || color3 !== '#fff' ) ) && (style.background = 'linear-gradient(' + gradientType + ', ' + color1 + ' ' + gradientRange1 + '%, ' + color2 + ' ' + gradientRange2 + '%, ' + color3 + ' ' + gradientRange3 + '%)');


            marginTop && (style.marginTop = marginTop + 'px');
            if (borderStyle) {
                style.borderStyle = borderStyle;
                if (borderWidth) {
                    style.borderWidth = borderWidth + 'px'
                }
                if (borderColor) {
                    style.borderColor = borderColor
                }
                if (borderRadius) {
                    style.borderRadius = borderRadius
                }
            } else {
                if (topBorderStyle) {
                    style.borderTopStyle = topBorderStyle;
                    if (topBorderWidth) {
                        style.borderTopWidth = topBorderWidth + 'px'
                    }
                    if (topBorderColor) {
                        style.borderTopColor = topBorderColor
                    }
                    if (topBorderRadius) {
                        style.borderTopLeftRadius = topBorderRadius
                    }
                }
                if (bottomBorderStyle) {
                    style.borderBottomStyle = bottomBorderStyle;
                    if (bottomBorderWidth) {
                        style.borderBottomWidth = bottomBorderWidth + 'px'
                    }
                    if (bottomBorderColor) {
                        style.borderBottomColor = bottomBorderColor
                    }
                    if (bottomBorderRadius) {
                        style.borderBottomRightRadius = bottomBorderRadius
                    }
                }
                if (rightBorderStyle) {
                    style.borderRightStyle = rightBorderStyle;
                    if (rightBorderWidth) {
                        style.borderRightWidth = rightBorderWidth + 'px'
                    }
                    if (rightBorderColor) {
                        style.borderRightColor = rightBorderColor
                    }
                    if (rightBorderRadius) {
                        style.borderTopRightRadius = rightBorderRadius
                    }
                }
                if (leftBorderStyle) {
                    style.borderLeftStyle = leftBorderStyle;
                    if (leftBorderWidth) {
                        style.borderLeftWidth = leftBorderWidth + 'px'
                    }
                    if (leftBorderColor) {
                        style.borderLeftColor = leftBorderColor
                    }
                    if (leftBorderRadius) {
                        style.borderBottomLeftRadius = leftBorderRadius
                    }
                }
            }

            return [
                (

                    <InspectorControls>
                        <div className="custom-inspactor-setting">
                            <PanelBody title={ __('Wrapper Tag settings ') } initialOpen={ false }>
                                <Button
                                    className={ElementTag === 'header' ? 'button active' : 'button'}
                                    onClick={onSelectTagType}
                                    value="header">
                                    {__('Header')}
                                </Button>
                                <Button
                                    className={ElementTag === 'section' ? 'button active' : 'button'}
                                    onClick={onSelectTagType}
                                    value="section">
                                    {__('Section')}
                                </Button>
                                <TextControl
                                    label="Wrapper Tag ID Attribute"
                                    type="string"
                                    placeHolder="id"
                                    value={ elementID }
                                    onChange={ (value) => setAttributes({elementID: value}) }
                                />
                            </PanelBody>
                            <PanelBody title={ __('Page layout settings ') } initialOpen={ false }>
                                <Button
                                    className={layout === 'fixed' ? 'button has-tooltip active' : 'button has-tooltip'}
                                    onClick={onSelectLayout}
                                    data-tooltip="This layout is for fixed width (width:1200px)."
                                    value="fixed">
                                    {__('Fixed')}
                                </Button>
                                <Button
                                    className={layout === 'semi' ? 'button has-tooltip active' : 'button has-tooltip'}
                                    onClick={onSelectLayout}
                                    data-tooltip="This layout is for Semi width (width:85%)."
                                    value="semi">
                                    {__('Semi')}
                                </Button>
                            </PanelBody>
                            <PanelBody title={ __('Background Setting') } initialOpen={ false }>
                                <PanelBody title={ __('Background Image') } initialOpen={ false }>
                                    <MediaUpload
                                        onSelect={  backgroundImage => setAttributes({
                                            backgroundImage: backgroundImage.sizes.full.url ? backgroundImage.sizes.full.url : '',
                                            backgroundColor: ''
                                        }) }
                                        type="image"
                                        value={ backgroundImage }
                                        render={ ({open}) => (
                                            <Button
                                                className={ backgroundImage ? 'image-button' : 'button button-large' }
                                                onClick={ open }>
                                                { !backgroundImage ? __('Upload Image') :
                                                    <div style={ {
                                                        backgroundImage: `url(${backgroundImage})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        height: '150px',
                                                        width: '225px'
                                                    } }>
                                                    </div> }
                                            </Button>
                                        ) }
                                    />
                                    { backgroundImage ? <Button
                                        className="button"
                                        onClick={() => setAttributes({backgroundImage: '', overlayColor: ''}) }>
                                        {__('Remove Background Image')}
                                    </Button> : null
                                    }
                                    { backgroundImage && (
                                        <Fragment><br/><br/>

                                            < ToggleControl

                                                label={ <p>
                                                    <strong>{ __('Background Size')}</strong><br/>{__('ON - Set background size "Cover"')}
                                                </p>}
                                                checked={ backgroundSize }
                                                onChange={ () => setAttributes({backgroundSize: !backgroundSize}) }
                                            />
                                            <ToggleControl
                                                label={ <p>
                                                    <strong>{__('background Attachment') }</strong><br/>{__('ON - Set background attachment "Fixed" ') }
                                                </p> }
                                                checked={ backgroundAttachment }
                                                onChange={ () => setAttributes({backgroundAttachment: !backgroundAttachment}) }
                                            />
                                            <SelectControl
                                                label={ __('Select Position') }
                                                value={ backgroundPosition }
                                                options={ [
                                                    {label: __('Bottom'), value: 'bottom'},
                                                    {label: __('Center'), value: 'center'},
                                                    {label: __('Inherit'), value: 'inherit'},
                                                    {label: __('Initial'), value: 'initial'},
                                                    {label: __('Left'), value: 'left'},
                                                    {label: __('Right'), value: 'right'},
                                                    {label: __('Top'), value: 'top'},
                                                    {label: __('Unset'), value: 'unset'},
                                                ] }
                                                onChange={ (value) => setAttributes({backgroundPosition: value}) }
                                            />
                                        </Fragment>
                                    ) }
                                </PanelBody>
                                { backgroundImage && (
                                    <Fragment>
                                        <PanelColorSettings
                                            title={ __('Overlay') }
                                            initialOpen={ false }
                                            colorSettings={ [{
                                                value: overlayColor,
                                                onChange: (value) => setAttributes({overlayColor: value}),
                                                label: __('Overlay Color'),
                                            }] }
                                        >
                                            <RangeControl
                                                label={ __('Background Opacity') }
                                                value={ opacity }
                                                onChange={ (ratio) => setAttributes({opacity: ratio}) }
                                                min={ 0 }
                                                max={ 100 }
                                                step={ 10 }
                                            />
                                        </PanelColorSettings>
                                    </Fragment>
                                ) }
                                {  (
                                    <PanelColorSettings
                                        title={ __('Background Color') }
                                        initialOpen={ false }
                                        colorSettings={ [
                                            {
                                                label: __(''),
                                                value: backgroundColor,
                                                onChange: (value) => setAttributes({
                                                    backgroundColor: value ? value : '',
                                                    opacity: 0
                                                }),
                                            },
                                        ] }
                                    /> ) }
                                <PanelBody title={ __('Gradient Background') } initialOpen={ false }
                                           className="gredient-setting">
                                    <SelectControl
                                        label={ __('Select Gradient Type') }
                                        value={ gradientType }
                                        options={ [
                                            {label: __('Select Type'), value: ''},
                                            {label: __('bottom'), value: 'to bottom'},
                                            {label: __('Top'), value: 'to top'},
                                            {label: __('Right'), value: 'to right'},
                                            {label: __('Left'), value: 'to left'},
                                            {label: __('Top Left'), value: 'to top left'},
                                            {label: __('Bottom Left'), value: 'to bottom left'},
                                            {label: __('Top Right'), value: 'to top right'},
                                            {label: __('Bottom Right'), value: 'to bottom right'},
                                        ] }
                                        onChange={ (value) => setAttributes({gradientType: value}) }
                                    />
                                    {gradientType && (
                                        <Fragment>
                                            <h3>{__('Gradient Fill 1')}</h3>
                                            <PanelColorSettings
                                                className="gradientcolor"
                                                initialOpen={ true }
                                                colorSettings={ [
                                                    {
                                                        label: __('Color'),
                                                        value: color1,
                                                        onChange: (value) => setAttributes({color1: value ? value : '#fff'}),
                                                    }
                                                ] }
                                            />
                                            <RangeControl
                                                label={ __('Range')}
                                                value={gradientRange1}
                                                min="0"
                                                max="100"
                                                step="10"
                                                onChange={(value) => setAttributes({gradientRange1: value})}
                                            />
                                            <h3>{__('Gradient Fill 2')}</h3>
                                            <PanelColorSettings
                                                className="gradientcolor"
                                                title={__('Color')}
                                                initialOpen={ true }
                                                colorSettings={ [
                                                    {
                                                        label: __('Color'),
                                                        value: color2,
                                                        onChange: (value) => setAttributes({color2: value ? value : '#fff'}),
                                                    }
                                                ] }
                                            />
                                            <RangeControl
                                                label={ __('Range')}
                                                value={gradientRange2}
                                                min="0"
                                                max="100"
                                                step="10"
                                                onChange={(value) => setAttributes({gradientRange2: value ? value : 0})}
                                            />
                                            <h3>{__('Gradient Fill 3')}</h3>
                                            <PanelColorSettings
                                                className="gradientcolor"
                                                title={__('Color')}
                                                initialOpen={ true }
                                                colorSettings={ [
                                                    {
                                                        label: __('Color'),
                                                        value: color3,
                                                        onChange: (value) => setAttributes({color3: value ? value : '#fff'}),
                                                    }
                                                ] }
                                            />
                                            <RangeControl
                                                label={ __('Range')}
                                                value={gradientRange3}
                                                min="0"
                                                max="100"
                                                step="10"
                                                onChange={ (value) => setAttributes({gradientRange3: value ? value : 0}) }
                                            />
                                        </Fragment>
                                    )}
                                </PanelBody>
                            </PanelBody>
                            <PanelBody title={ __('Border Setting') } initialOpen={ false } className="border-setting">
                                <PanelBody title={ __('All Border') } initialOpen={ false }>
                                    <SelectControl
                                        label={ __('Select Border Style') }
                                        value={ borderStyle }
                                        options={ [
                                            {label: __('Select Style'), value: ''},
                                            {label: __('Solid'), value: 'solid'},
                                            {label: __('Dashed'), value: 'dashed'},
                                            {label: __('Dotted'), value: 'dotted'},
                                        ] }
                                        onChange={ (value) => setAttributes({borderStyle: value}) }
                                    />
                                    { borderStyle && (
                                        <Fragment>
                                            <PanelColorSettings
                                                className="bordercolor"
                                                title={ __('Border Color') }
                                                initialOpen={ true }
                                                colorSettings={ [
                                                    {
                                                        label: __('Border Color'),
                                                        value: borderColor,
                                                        onChange: (value) => setAttributes({borderColor: value}),
                                                    },
                                                ] }
                                            />
                                            <RangeControl
                                                label={ __('Border width') }
                                                value={ borderWidth ? borderWidth : 0}
                                                min={ 0 }
                                                max={ 10 }
                                                onChange={ (value) => setAttributes({borderWidth: value}) }
                                            />
                                            <RangeControl
                                                label={ __('Border radius') }
                                                value={ borderRadius ? borderRadius : 0 }
                                                min={ 0 }
                                                max={ 100 }
                                                onChange={ (value) => setAttributes({borderRadius: value}) }
                                            />
                                        </Fragment>
                                    ) }
                                </PanelBody>
                                { !borderStyle && (
                                    <PanelBody title={ __('Top Border') } initialOpen={ false }>
                                        <SelectControl
                                            label={ __('Select Border Style') }
                                            value={ topBorderStyle }
                                            options={ [
                                                {label: __('Select Style'), value: ''},
                                                {label: __('Solid'), value: 'solid'},
                                                {label: __('Dashed'), value: 'dashed'},
                                                {label: __('Dotted'), value: 'dotted'},
                                            ] }
                                            onChange={ (value) => setAttributes({topBorderStyle: value}) }
                                        />
                                        { topBorderStyle && (
                                            <Fragment>
                                                <PanelColorSettings
                                                    className="bordercolor"
                                                    title={ __('Border Color') }
                                                    initialOpen={ true }
                                                    colorSettings={ [
                                                        {
                                                            label: __('Border Color'),
                                                            value: topBorderColor,
                                                            onChange: (value) => setAttributes({topBorderColor: value}),
                                                        },
                                                    ] }
                                                />
                                                <RangeControl
                                                    label={ __('Border width') }
                                                    value={ topBorderWidth ? topBorderWidth : 0}
                                                    min={ 0 }
                                                    max={ 10 }
                                                    onChange={ (value) => setAttributes({topBorderWidth: value}) }
                                                />
                                                <RangeControl
                                                    label={ __('Border radius') }
                                                    value={ topBorderRadius ? topBorderRadius : 0 }
                                                    min={ 0 }
                                                    max={ 100 }
                                                    onChange={ (value) => setAttributes({topBorderRadius: value}) }
                                                />
                                            </Fragment>
                                        ) }
                                    </PanelBody>
                                ) }
                                { !borderStyle && (
                                    <PanelBody title={ __('Right Border') } initialOpen={ false }>
                                        <SelectControl
                                            label={ __('Select Border Style') }
                                            value={ rightBorderStyle }
                                            options={ [
                                                {label: __('Select Style'), value: ''},
                                                {label: __('Solid'), value: 'solid'},
                                                {label: __('Dashed'), value: 'dashed'},
                                                {label: __('Dotted'), value: 'dotted'},
                                            ] }
                                            onChange={ (value) => setAttributes({rightBorderStyle: value}) }
                                        />
                                        { rightBorderStyle && (
                                            <Fragment>
                                                <PanelColorSettings
                                                    className="bordercolor"
                                                    title={ __('Border Color') }
                                                    initialOpen={ true }
                                                    colorSettings={ [
                                                        {
                                                            label: __('Border Color'),
                                                            value: rightBorderColor,
                                                            onChange: (value) => setAttributes({rightBorderColor: value}),
                                                        },
                                                    ] }
                                                />
                                                <RangeControl
                                                    label={ __('Border width') }
                                                    value={ rightBorderWidth ? rightBorderWidth : 0}
                                                    min={ 0 }
                                                    max={ 10 }
                                                    onChange={ (value) => setAttributes({rightBorderWidth: value}) }
                                                />
                                                <RangeControl
                                                    label={ __('Border radius') }
                                                    value={ rightBorderRadius ? rightBorderRadius : 0 }
                                                    min={ 0 }
                                                    max={ 100 }
                                                    onChange={ (value) => setAttributes({rightBorderRadius: value}) }
                                                />
                                            </Fragment>
                                        ) }
                                    </PanelBody>
                                ) }
                                { !borderStyle && (
                                    <PanelBody title={ __('Bottom Border') } initialOpen={ false }>
                                        <SelectControl
                                            label={ __('Border Style') }
                                            value={ bottomBorderStyle }
                                            options={ [
                                                {label: __('Select Style'), value: ''},
                                                {label: __('Solid'), value: 'solid'},
                                                {label: __('Dashed'), value: 'dashed'},
                                                {label: __('Dotted'), value: 'dotted'},
                                            ] }
                                            onChange={ (value) => setAttributes({bottomBorderStyle: value}) }
                                        />
                                        {  bottomBorderStyle && (
                                            <Fragment>
                                                <PanelColorSettings
                                                    className="bordercolor"
                                                    title={ __('Border Color') }
                                                    initialOpen={ true }
                                                    colorSettings={ [
                                                        {
                                                            label: __('Border Color'),
                                                            value: bottomBorderColor,
                                                            onChange: (value) => setAttributes({bottomBorderColor: value}),
                                                        },
                                                    ] }
                                                />
                                                <RangeControl
                                                    label={ __('Border width') }
                                                    value={ bottomBorderWidth ? bottomBorderWidth : 0}
                                                    min={ 0 }
                                                    max={ 10 }
                                                    onChange={ (value) => setAttributes({bottomBorderWidth: value}) }
                                                />
                                                <RangeControl
                                                    label={ __('Border radius') }
                                                    value={ bottomBorderRadius ? bottomBorderRadius : 0 }
                                                    min={ 0 }
                                                    max={ 100 }
                                                    onChange={ (value) => setAttributes({bottomBorderRadius: value}) }
                                                />
                                            </Fragment>
                                        ) }
                                    </PanelBody>
                                ) }
                                { !borderStyle && (
                                    <PanelBody title={ __('Left Border') } initialOpen={ false }>
                                        <SelectControl
                                            label={ __('Select Border Style') }
                                            value={ leftBorderStyle }
                                            options={ [
                                                {label: __('Select Style'), value: ''},
                                                {label: __('Solid'), value: 'solid'},
                                                {label: __('Dashed'), value: 'dashed'},
                                                {label: __('Dotted'), value: 'dotted'},
                                            ] }
                                            onChange={ (value) => setAttributes({leftBorderStyle: value}) }
                                        />
                                        { leftBorderStyle && (
                                            <Fragment>
                                                <PanelColorSettings
                                                    title={ __('Border Color') }
                                                    initialOpen={ true }
                                                    colorSettings={ [
                                                        {
                                                            label: __('Border Color'),
                                                            value: leftBorderColor,
                                                            onChange: (value) => setAttributes({leftBorderColor: value}),
                                                        },
                                                    ] }
                                                />
                                                <RangeControl
                                                    label={ __('Border width') }
                                                    value={ leftBorderWidth ? leftBorderWidth : 0}
                                                    min={ 1 }
                                                    max={ 10 }
                                                    onChange={ (value) => setAttributes({leftBorderWidth: value}) }
                                                />
                                                <RangeControl
                                                    label={ __('Border radius') }
                                                    value={ leftBorderRadius ? leftBorderRadius : 0 }
                                                    min={ 0 }
                                                    max={ 100 }
                                                    onChange={ (value) => setAttributes({leftBorderRadius: value}) }
                                                />
                                            </Fragment>
                                        ) }
                                    </PanelBody>
                                ) }
                            </PanelBody>
                            <PanelBody title={ __('General Setting') } initialOpen={ false }>
                                <div className="alignment-settings">
                                    <div className="alignment-wrapper">
                                        <TextControl
                                            label="Width"
                                            type="number"
                                            placeHolder="Width (%)"
                                            value={ width }
                                            min="1"
                                            max="100"
                                            step="1"
                                            onChange={ (value) => setAttributes({width: value})}
                                        />
                                    </div>
                                    <div className="alignment-wrapper">
                                        <TextControl
                                            label="Height"
                                            type="number"
                                            min="1"
                                            placeHolder="Height (px)"
                                            value={ height }
                                            onChange={ (value) => setAttributes({height: value})}
                                        />
                                    </div>
                                </div>
                                <p>Padding Setting (px)</p>
                                <div className="padding-setting">
                                    <div className="padding-top has-tooltip" data-tooltip="Padding Top">
                                        <TextControl
                                            type="number"
                                            min="1"
                                            value={ paddingTop}
                                            onChange={ (value) => setAttributes({paddingTop: value}) }
                                        />
                                    </div>
                                    <div className="padding-right has-tooltip" data-tooltip="Padding Right">
                                        <TextControl
                                            type="number"
                                            min="1"
                                            value={ paddingRight}
                                            onChange={ (value) => setAttributes({paddingRight: value}) }
                                        />
                                    </div>
                                    <div className="padding-bottom has-tooltip" data-tooltip="Padding Bottom">
                                        <TextControl
                                            type="number"
                                            min="1"
                                            value={ paddingBottom}
                                            onChange={ (value) => setAttributes({paddingBottom: value}) }
                                        />
                                    </div>
                                    <div className="padding-left has-tooltip" data-tooltip="Padding Left">
                                        <TextControl
                                            type="number"
                                            min="1"
                                            value={ paddingLeft}
                                            onChange={ (value) => setAttributes({paddingLeft: value}) }
                                        />
                                    </div>
                                </div>
                                <p>Margin Setting (px)</p>
                                <div className="margin-setting">
                                    <div className="margin-top has-tooltip" data-tooltip="Margin Top">
                                        <TextControl
                                            type="number"
                                            value={ marginTop}
                                            onChange={ (value) => setAttributes({marginTop: value}) }
                                        />
                                    </div>
                                    <div className="margin-right has-tooltip" data-tooltip="Margin Right">
                                        <TextControl
                                            type="number"
                                            value={ marginRight}
                                            onChange={ (value) => setAttributes({marginRight: value}) }
                                        />
                                    </div>
                                    <div className="margin-bottom has-tooltip" data-tooltip="Margin Bottom">
                                        <TextControl
                                            type="number"
                                            value={ marginBottom}
                                            onChange={ (value) => setAttributes({marginBottom: value}) }
                                        />
                                    </div>
                                    <div className="margin-left has-tooltip" data-tooltip="Margin Left">
                                        <TextControl
                                            type="number"
                                            value={ marginLeft}
                                            onChange={ (value) => setAttributes({marginLeft: value}) }
                                        />
                                    </div>
                                </div>
                                <div className="block-text-alignment-settings">
                                    <div className="alignment-wrapper">
                                        <p>Block Alignment</p>
                                        <BlockAlignmentToolbar

                                            value={ blockAlign }
                                            onChange={ (value) => setAttributes({blockAlign: value}) }
                                        />
                                    </div>
                                    <div className="alignment-wrapper">
                                        <p>Text Alignment</p>
                                        <AlignmentToolbar
                                            value={ textAlign }
                                            onChange={ (value) => setAttributes({textAlign: value}) }
                                        />
                                    </div>
                                </div>
                            </PanelBody>
                        </div>
                    </InspectorControls>

                ),
                (
                    <ElementTag id={elementID} className={classes} style={ style }>
                        <InnerBlocks/>
                    </ElementTag>
                ),
            ]
        },
        save (props){
            const {attributes, className} = props;
            const {
                backgroundImage,
                backgroundColor,
                backgroundSize,
                backgroundPosition,
                backgroundAttachment,
                layout,
                borderStyle,
                borderWidth,
                borderColor,
                borderRadius,
                blockAlign,
                textAlign,
                width,
                height,
                opacity,
                overlayColor,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                gradientRange1,
                gradientRange2,
                gradientRange3,
                color1,
                color2,
                color3,
                gradientType,
                topBorderStyle,
                topBorderWidth,
                topBorderColor,
                topBorderRadius,
                bottomBorderStyle,
                bottomBorderWidth,
                bottomBorderColor,
                bottomBorderRadius,
                rightBorderStyle,
                rightBorderWidth,
                rightBorderColor,
                rightBorderRadius,
                leftBorderStyle,
                leftBorderWidth,
                leftBorderColor,
                leftBorderRadius,
                ElementTag,
                elementID
            } = attributes;
            const classes = classnames(
                className,

                layout && `has-${ layout }`,
                blockAlign && `is-block-${blockAlign}`,
                width && `has-custom-width`,
                {
                    'has-background-size': backgroundSize,
                    'has-background-attachment': backgroundAttachment,
                    'has-background-opacity': opacity !== 0,

                },
                opacityRatioToClass(opacity)
            );
            const style = {};
            backgroundImage && (style.backgroundImage = `url(${backgroundImage})` );
            backgroundColor && (style.backgroundColor = backgroundColor);
            backgroundPosition && (style.backgroundPosition = backgroundPosition);
            textAlign && (style.textAlign = textAlign);
            width && (style.width = width + '%');
            height && (style.height = height + 'px');
            overlayColor && (style.backgroundColor = overlayColor);
            paddingTop && (style.paddingTop = paddingTop + 'px');
            paddingRight && (style.paddingRight = paddingRight + 'px');
            paddingBottom && (style.paddingBottom = paddingBottom + 'px');
            paddingLeft && (style.paddingLeft = paddingLeft + 'px');
            marginTop && (style.marginTop = marginTop + 'px');
            marginRight && (style.marginRight = marginRight + 'px');
            marginBottom && (style.marginBottom = marginBottom + 'px');
            marginLeft && (style.marginLeft = marginLeft + 'px');
            (gradientType && ( color1 !== '#fff' || color2 !== '#fff' || color3 !== '#fff' ) ) && (style.background = 'linear-gradient(' + gradientType + ', ' + color1 + ' ' + gradientRange1 + '%, ' + color2 + ' ' + gradientRange2 + '%, ' + color3 + ' ' + gradientRange3 + '%)');
            marginTop && (style.marginTop = marginTop + 'px');
            if (borderStyle) {
                style.borderStyle = borderStyle;
                if (borderWidth) {
                    style.borderWidth = borderWidth + 'px'
                }
                if (borderColor) {
                    style.borderColor = borderColor
                }
                if (borderRadius) {
                    style.borderRadius = borderRadius
                }
            } else {
                if (topBorderStyle) {
                    style.borderTopStyle = topBorderStyle;
                    if (topBorderWidth) {
                        style.borderTopWidth = topBorderWidth + 'px'
                    }
                    if (topBorderColor) {
                        style.borderTopColor = topBorderColor
                    }
                    if (topBorderRadius) {
                        style.borderTopLeftRadius = topBorderRadius
                    }
                }
                if (bottomBorderStyle) {
                    style.borderBottomStyle = bottomBorderStyle;
                    if (bottomBorderWidth) {
                        style.borderBottomWidth = bottomBorderWidth + 'px'
                    }
                    if (bottomBorderColor) {
                        style.borderBottomColor = bottomBorderColor
                    }
                    if (bottomBorderRadius) {
                        style.borderBottomRightRadius = bottomBorderRadius
                    }
                }
                if (rightBorderStyle) {
                    style.borderRightStyle = rightBorderStyle;
                    if (rightBorderWidth) {
                        style.borderRightWidth = rightBorderWidth + 'px'
                    }
                    if (rightBorderColor) {
                        style.borderRightColor = rightBorderColor
                    }
                    if (rightBorderRadius) {
                        style.borderTopRightRadius = rightBorderRadius
                    }
                }
                if (leftBorderStyle) {
                    style.borderLeftStyle = leftBorderStyle;
                    if (leftBorderWidth) {
                        style.borderLeftWidth = leftBorderWidth + 'px'
                    }
                    if (leftBorderColor) {
                        style.borderLeftColor = leftBorderColor
                    }
                    if (leftBorderRadius) {
                        style.borderBottomLeftRadius = leftBorderRadius
                    }
                }
            }
            return (
                <ElementTag id={elementID} className={classes} style={ style }>
                    <InnerBlocks.Content/>
                </ElementTag>
            )
        },
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, window.wp.editor, window.wp.components);
function opacityRatioToClass(ratio) {
    return ( ratio === 0  ) ?
        null :
        'has-background-opacity-' + ( 10 * Math.round(ratio / 10) );
}