import React, { Component } from 'react';
import Link from 'next/link';

class PageBanner extends Component {
    render() {

        let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } = this.props;

        return (
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h1 className="second-h1">{pageTitle}</h1>
                        <ul>
                            <li>
                                <Link href={breadcrumbUrl}>
                                    <a>{breadcrumbTextOne}</a>
                                </Link>
                            </li>
                            <li>{breadcrumbTextTwo}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;