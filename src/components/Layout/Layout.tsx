import classes from "./Layout.module.css";

type LayoutProps = {
    PageContent: React.ReactNode;
};

export default function Layout({ PageContent }: LayoutProps) {
    return (
        <div>
            <main className={classes["page-content"]}>{PageContent}</main>
        </div>
    );
}
