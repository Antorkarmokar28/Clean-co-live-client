const Container = ({ children }) => {
    return (
        <>
            <div className="w-full max-w-[1140px] px-[25px] mx-auto">
                {children}
            </div>
        </>
    );
};

export default Container;