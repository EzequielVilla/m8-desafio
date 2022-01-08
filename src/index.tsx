import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "router/router";
import { RecoilRoot } from "recoil";
import { LoadingAnimation } from "components/LoadingAnimation/LoadingAnimation";

ReactDOM.render(
    <RecoilRoot>
        <Suspense fallback={<LoadingAnimation />}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>,
    document.querySelector(".root")
);
