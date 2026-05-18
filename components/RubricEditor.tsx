/**
 * RubricEditor — Education vertical's per-typology editor.
 *
 * Concrete subclass of the framework's `ArtefactEditor`. Switches layout
 * based on rubric type (analytic grid / holistic single block /
 * single-point / checklist), bound to the four `RubricType` values that
 * the backend's `agent/ontologies/education.py` validates.
 */
import ArtefactEditor from "./ArtefactEditor";
import { verticalConfig } from "../lib/vertical_config";

export default function RubricEditor() {
  // TODO: render the rubric-type selector + criterion editor; per-type layout.
  // For now, defer to the framework's generic ArtefactEditor with edu props.
  return (
    <div data-testid="rubric-editor" data-vertical={verticalConfig.name}>
      <ArtefactEditor />
    </div>
  );
}
