import LabeledCheckbox from "components/labeled-checkbox";
import {
  SettingsContainer,
  SettingsRow,
  SettingsData,
  InputRow
} from "./styled";
import { Paper } from "components/common";
import InputNumber from "components/input-number";
import { useSettings } from "components/contexts/settings";
import { ICheckBoxData } from "utils/types";
import SettingsActionButtons from "components/settings-action-buttons";

interface ListProps {
  data: ICheckBoxData[];
  onUpdate: (value: string) => void;
  color: "warning" | "info" | "success";
}

interface CheckboxProps {
  label: string;
  value: boolean;
  onUpdate: () => void;
  color: "warning" | "info" | "success";
  noBorder?: boolean;
}

const Settings = () => {
  const {
    browsersList,
    onUpdateBrowsersList,
    isIncognito,
    onUpdateIncognito,
    deviceActions,
    onUpdateDeviceActions,
    generalActions,
    onUpdateGeneralActions,
    isVisitPages,
    onUpdateVisitedPage,
    waitingTime,
    pageWaiting,
    targetSite,
    automaticReset,
    onUpdateWaitingTime,
    onUpdatePageWaiting,
    onUpdateTargetSite,
    onUpdateAutomaticReset
  } = useSettings();

  return (
    <>
      <SettingsContainer>
        <Paper elevation={0} sx={{ marginBottom: "24px" }}>
          <SettingsRow borderbottom={1}>
            <Settings.ListData
              data={browsersList}
              onUpdate={onUpdateBrowsersList}
              color={"warning"}
            />
            <SettingsData borderleft={1}>
              <Settings.Check
                value={isIncognito}
                onUpdate={onUpdateIncognito}
                color={"warning"}
                label={"Incognito"}
              />
            </SettingsData>
          </SettingsRow>
          <>
            <SettingsData>
              <InputRow>
                Wait
                <InputNumber
                  value={waitingTime.from}
                  onChange={(from: number) =>
                    onUpdateWaitingTime({ ...waitingTime, from })
                  }
                />
                <InputNumber
                  value={waitingTime.to}
                  onChange={(to: number) =>
                    onUpdateWaitingTime({ ...waitingTime, to })
                  }
                />
                seconds on the targeted website.
              </InputRow>
              <Settings.Check
                value={isVisitPages}
                onUpdate={onUpdateVisitedPage}
                color={"info"}
                label={"Visit the Page within the Site"}
                noBorder
              />
              <InputRow>
                <InputNumber
                  value={pageWaiting.pageCount}
                  onChange={(pageCount: number) =>
                    onUpdatePageWaiting({ ...pageWaiting, pageCount })
                  }
                  noPaddingLeft
                />
                pages
                <InputNumber
                  value={pageWaiting.from}
                  onChange={(from: number) =>
                    onUpdatePageWaiting({ ...pageWaiting, from })
                  }
                />
                <InputNumber
                  value={pageWaiting.to}
                  onChange={(to: number) =>
                    onUpdatePageWaiting({ ...pageWaiting, to })
                  }
                />
                seconds wait.
              </InputRow>
              <InputRow>
                Target site
                <InputNumber
                  value={targetSite.count}
                  onChange={(count: number) =>
                    onUpdateTargetSite({ ...targetSite, count })
                  }
                />
                if not found times
                <InputNumber
                  value={targetSite.waitingTime}
                  onChange={(waitingTime: number) =>
                    onUpdateTargetSite({ ...targetSite, waitingTime })
                  }
                />
                minutes wait.
              </InputRow>
              <InputRow>
                <InputNumber
                  value={automaticReset}
                  onChange={(value: number) => onUpdateAutomaticReset(value)}
                  noPaddingLeft
                />
                automatic reset after operation.
              </InputRow>
            </SettingsData>
          </>
        </Paper>
        <Paper elevation={0} sx={{ marginBottom: "24px" }}>
          <SettingsRow borderbottom={1}>
            <Settings.ListData
              data={deviceActions}
              onUpdate={onUpdateDeviceActions}
              color={"success"}
            />
          </SettingsRow>
          <SettingsRow borderbottom={0}>
            <Settings.ListData
              data={generalActions}
              onUpdate={onUpdateGeneralActions}
              color={"info"}
            />
          </SettingsRow>
        </Paper>
        <SettingsActionButtons />
      </SettingsContainer>
    </>
  );
};

Settings.ListData = ({ data, onUpdate, color }: ListProps) => (
  <SettingsData direction={"row"}>
    {data.map(({ title, value, isActive }: ICheckBoxData) => (
      <LabeledCheckbox
        key={value}
        type={color}
        isActive={isActive}
        label={title}
        onChange={() => onUpdate(value)}
      />
    ))}
  </SettingsData>
);

Settings.Check = ({
  label,
  value,
  onUpdate,
  color,
  noBorder
}: CheckboxProps) => (
  <LabeledCheckbox
    type={color}
    isActive={value}
    label={label}
    onChange={onUpdate}
    noBorder={noBorder}
  />
);

export default Settings;
